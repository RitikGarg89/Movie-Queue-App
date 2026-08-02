import React from 'react'
import loupe from '../icons/loupe.png'

function NavBar() {
    return (
        <div className="w-[90%] flex justify-between mx-auto mt-5 p-5">
            <h1 className="text-4xl font-extrabold  text-slate-800">Movie Queue</h1>
            <form className="flex w-[40%] border border-black/55 rounded-4xl items-center pl-5 shadow shadow-black bg-white hover:shadow-[0_2px_2px_2px] hover:shadow-black/40">
                <img src={loupe} alt="Search" width={18} />
                <input type="search" name="search" id="earch" placeholder='Search for a movie..' className='flex-1 px-2 text-[18px] outline-none placeholder:text-black-500 placeholder:font-bold' />
            </form>
            <button className='bg-black text-white p-y2 px-4 font-bold rounded-3xl'>My Queue <span className="bg-red-500 px-1 rounded-2xl items-center m-0 py-0">{1}</span></button>
        </div>
    )
}

export default NavBar