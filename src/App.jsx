import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'
import Loading from './components/Loading'
import MovieQueue from './components/MovieQueue';
import axios from "axios";

function App() {

  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY)

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    if (!API_KEY) return;
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        setMovieData(response.data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [API_KEY]);


  const movies = Array.from({ length: 12 });
  return (
    <div className='w-[90%] min-h-screen flex flex-col mx-auto items-center'>
      <NavBar />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 md:mt-10 mt-6 pb-16">
        {movieData.map((movie, i) => (
          <MovieCard key={movie.id || i} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App