import React from 'react'
import loupe from '../icons/loupe.png'
import { Link } from 'react-router-dom'

function NavBar({ setSearch, search, movieQueue }) {
    return (
        <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center mx-auto mt-5 p-3 md:p-5">
            <Link to={'/'}><h1 className="cursor-default text-2xl md:text-4xl font-extrabold text-slate-800">Movie Queue</h1></Link>
            <form className="flex w-full md:w-[45%] lg:w-[40%] py-2 md:py-1 border border-black/55 rounded-4xl items-center pl-5 shadow shadow-black bg-white hover:shadow-[0_2px_2px_2px] hover:shadow-black/40">
                <img src={loupe} alt="Search" width={18} />
                <input type="search" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for a movie..' className='flex-1 px-2 text-[16px] md:text-[18px] outline-none placeholder:text-black-500 placeholder:font-bold' />
            </form>
            <Link to={'/movie-queue'}><button className='w-full md:w-auto bg-black text-white py-2 px-4 font-bold rounded-3xl'>My Queue <span className="bg-red-500 px-1.5 rounded-2xl items-center m-0 py-0">{movieQueue.length}</span></button></Link>
        </div>
    )
}

export default NavBar