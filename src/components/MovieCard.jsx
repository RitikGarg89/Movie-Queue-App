import React from 'react'
import movieIcon from '../icons/movie.png'

function MovieCard({ movie }) {
    const title = movie?.title || "Name";
    const year = movie?.release_date ? movie.release_date.split('-')[0] : 2026;
    const rating = movie?.vote_average ? movie.vote_average.toFixed(1) : "8.9";
    const poster = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/250x375?text=No+Poster";

    return (
        <div className='w-full relative border-black border rounded-2xl overflow-hidden bg-slate-900 text-white'>
            <div className="flex justify-between w-full absolute p-2 sm:p-3 z-10">
                <img src={movieIcon} alt="Movie Icon" width={16} className="sm:w-[20px]" />
                <p className="bg-white/80 text-black rounded-full px-2 text-xs sm:text-sm font-semibold">&#9733; {rating}</p>
            </div>
            <img src={poster} alt={title} className='w-full aspect-[2/3] object-cover rounded-t-2xl' />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <p className="text-lg sm:text-2xl absolute bottom-[55px] sm:bottom-[75px] left-3 sm:left-4 right-3 sm:right-4 font-bold truncate z-10 text-white drop-shadow-md">
                {title}
            </p>
            <div className='flex justify-between p-3 sm:p-4 items-center bg-white text-black relative z-10'>
                <p className='text-sm sm:text-[18px] text-black/50 font-medium'>{year}</p>
                <button className='bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold text-xs sm:text-[14px] rounded-3xl px-2 py-0.5 sm:py-1 transition-colors'>+ Add</button>
            </div>
        </div>
    )
}

export default MovieCard