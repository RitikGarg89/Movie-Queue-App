import React from 'react'
import movie from '../icons/movie.png'

function MovieCard() {
    return (
        <div className='w-full relative border-black border rounded-2xl overflow-hidden'>
            <div className="flex justify-between w-full absolute p-2 sm:p-3">
                <img src={movie} alt="Search" width={16} className="sm:w-[20px]" />
                <p className="bg-white/80 rounded-full px-2 text-xs sm:text-sm">&#9733; {8.9}</p>
            </div>
            <img src="https://placehold.co/250x250" alt="Placeholder Image" className='w-full h-auto rounded-t-2xl' />
            <p className="text-xl sm:text-3xl absolute bottom-[55px] sm:bottom-[75px] left-3 sm:left-4 font-bold">{"Name"}</p>
            <div className='flex justify-between p-3 sm:p-4 items-center'>
                <p className='text-sm sm:text-[18px] text-black/40'>{2026}</p>
                <button className='bg-blue-200 text-blue-800 font-semibold text-xs sm:text-[14px] rounded-3xl px-2 py-0.5 sm:py-1'>+ Add</button>
            </div>
        </div>
    )
}

export default MovieCard