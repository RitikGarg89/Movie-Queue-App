import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import { MovieQueueBoard, NavBar, MovieCard, Loading } from './components'

function App() {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [movieData, setMovieData] = useState([]);
  const [movieQueue, setMovieQueue] = useState(JSON.parse(localStorage.getItem('MovieQueue')) || [])

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Reset to first page when search query changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    if (!API_KEY) return;
    setLoading(true);
    if (!debouncedSearch) {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
        .then((response) => {
          setLoading(false)
          setMovieData(response.data.results || []);
          setTotalPages(response.data.total_pages || 1);
        })
        .catch((error) => {
          setLoading(false)
          console.error("Error fetching movies:", error);
        });
    } else {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}&page=${page}`)
        .then((response) => {
          setLoading(false)
          setMovieData(response.data.results || []);
          setTotalPages(response.data.total_pages || 1);
        })
        .catch((error) => {
          setLoading(false)
          console.error("Error fetching movies:", error);
        });
    }
  }, [API_KEY, debouncedSearch, page]);

  useEffect(() => {
    localStorage.setItem('MovieQueue', JSON.stringify(movieQueue))
    console.log(movieQueue)
  }, [movieQueue])

  const addToMovieQueue = (movie) => {
    if (movieQueue.some(m => m.id === movie.id)) {
      setMovieQueue(prev => prev.filter(m => m.id !== movie.id));
    } else {
      const movieCopy = { ...movie, isWatched: false };
      setMovieQueue(prev => [...prev, movieCopy]);
    }
  }

  const toggleWatched = (movieId) => {
    setMovieQueue(prev => prev.map(m => m.id === movieId ? { ...m, isWatched: !m.isWatched } : m));
  }

  const removeFromQueue = (movieId) => {
    setMovieQueue(prev => prev.filter(m => m.id !== movieId));
  }

  return (
    <div className='w-[90%] min-h-screen flex flex-col mx-auto items-center'>
      <NavBar setSearch={setSearch} search={search} movieQueue={movieQueue} />
      <Routes>
        <Route element={!loading && movieData.length > 0 ? (
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 md:mt-10 mt-6 pb-8">
              {movieData.map((movie, i) => (
                <MovieCard key={movie.id || i} movie={movie} addToMovieQueue={addToMovieQueue} movieQueue={movieQueue} />
              ))}
            </div>
            
            {/* Pagination Controls */}
            <div className="flex items-center gap-4 py-8 select-none">
              <button
                disabled={page <= 1}
                onClick={() => {
                  setPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all ${
                  page <= 1 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:bg-slate-50 active:scale-95 cursor-pointer'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-sm font-bold text-slate-700 font-mono bg-white px-4 py-2 border border-slate-200 rounded-2xl shadow-sm">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page >= totalPages}
                onClick={() => {
                  setPage(p => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all ${
                  page >= totalPages 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:bg-slate-50 active:scale-95 cursor-pointer'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ) : loading ? <Loading /> : <div className="text-center mt-10 text-gray-500 font-medium">No Movies Found</div>} path='/' />
        <Route element={<MovieQueueBoard movieQueue={movieQueue} toggleWatched={toggleWatched} removeFromQueue={removeFromQueue} />} path='/movie-queue' />
      </Routes>
    </div>
  )
}

export default App