import React from 'react'
import loupe from '../icons/loupe.png'
import favicon from '../icons/favicon.svg'
import { Link } from 'react-router-dom'

function NavBar({ setSearch, search, movieQueue }) {
    return (
        <div className="w-full flex flex-row gap-2 sm:gap-4 justify-between items-center mx-auto mt-5 p-3 md:p-5 select-none">
            {/* Logo Section */}
            <Link to={'/'} className="flex items-center gap-2 shrink-0">
                <img src={favicon} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 hover:rotate-12 transition-transform duration-350" />
                <span className="hidden sm:inline text-xl md:text-3xl font-extrabold text-slate-800 tracking-tight">Movie Queue</span>
            </Link>

            {/* Search Input Form */}
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-1 max-w-[200px] sm:max-w-xs md:max-w-md py-1.5 md:py-2 border border-black/55 rounded-full items-center pl-3 md:pl-5 shadow shadow-black bg-white hover:shadow-[0_2px_2px_2px] hover:shadow-black/40"
            >
                <img src={loupe} alt="Search" className="w-4.5 h-4.5 md:w-[18px] md:h-[18px] shrink-0" />
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder='Search movies..' 
                    className='flex-1 min-w-0 px-2 text-sm md:text-lg outline-none placeholder:text-slate-400 placeholder:font-semibold' 
                />
            </form>

            {/* Queue Board Link Button */}
            <Link to={'/movie-queue'} className="shrink-0">
                <button className="bg-black hover:bg-slate-800 text-white py-1.5 px-3 md:py-2 md:px-5 font-bold rounded-full text-xs md:text-base flex items-center gap-1.5 transition-colors cursor-pointer shadow shadow-black/35 hover:shadow-md">
                    <span className="hidden sm:inline">My Queue</span>
                    <span className="sm:hidden">Queue</span>
                    <span className="bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full font-mono flex items-center justify-center">
                        {movieQueue.length}
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default NavBar