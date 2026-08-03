import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'
import Loading from './components/Loading'
import MovieQueue from './components/MovieQueue';
import axios from "axios";

function App() {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [movieData, setMovieData] = useState([]);
  const [movieQueue, setMovieQueue] = useState(JSON.parse(localStorage.getItem('MovieQueue')) || [])

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [page, setPage] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);


  useEffect(() => {
    if (!API_KEY) return;
    if (!debouncedSearch) axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        setMovieData(response.data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
    if (debouncedSearch) axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}&page=${1}`)
      .then((response) => {
        setMovieData(response.data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [API_KEY, debouncedSearch, page]);

  useEffect(() => {
    localStorage.setItem('MovieQueue', JSON.stringify(movieQueue))
    console.log(movieQueue)
  }, [movieQueue])

  const addToMovieQueue = (movie) => {
    if (movieQueue.some(m => m.id === movie.id)) setMovieQueue(prev => prev.filter(m => m.id !== movie.id));
    else {
      movie.isWatched = false;
      setMovieQueue(prev => [...prev, movie]);
    }
  }

  return (
    <div className='w-[90%] min-h-screen flex flex-col mx-auto items-center'>
      <NavBar setSearch={setSearch} search={search} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 md:mt-10 mt-6 pb-16">
        {movieData.map((movie, i) => (
          <MovieCard key={movie.id || i} movie={movie} addToMovieQueue={addToMovieQueue} movieQueue={movieQueue} />
        ))}
      </div>
    </div>
  )
}

export default App