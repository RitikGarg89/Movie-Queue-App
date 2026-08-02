import React from 'react'
import movie from '../icons/movie.png'

function MovieCard() {
    return (
        <div className='w-[250px] relative'>
            <div className='flex justify-between w-full absolute p-5'>
                <img src={movie} alt="Search" width={20} />
                <p>&#9733; {8.9}</p>
            </div>
            <img src="https://placehold.co/250x250" alt="Placeholder Image" width='250' height="250" />
            <p className="text-3xl absolute top-51 left-4">{"Name"}</p>
            <div className='flex justify-between'>
                <p>{2026}</p>
                <button>+ Add</button>
            </div>
        </div>
    )
}

export default MovieCard