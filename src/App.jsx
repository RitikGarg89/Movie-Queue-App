import React from 'react'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'
import Loading from './components/Loading'
import MovieQueue from './components/MovieQueue';

function App() {
  const movies = Array.from({ length: 12 });
  return (
    <div className='w-[90%] min-h-screen flex flex-col mx-auto items-center'>
      <NavBar />
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 md:mt-10 mt-6 pb-16"> */}
      {movies.map((_, i) => (
        <MovieQueue key={i} />
      ))}
      {/* </div> */}
    </div>
  )
}

export default App