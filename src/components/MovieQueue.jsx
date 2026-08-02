import React from 'react'

function MovieQueue() {
    return (
        <div className="flex items-center justify-between w-full p-3 bg-white border border-slate-200 rounded-2xl shadow-sm gap-3 sm:gap-4 hover:border-slate-300 transition-all">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <img src="https://placehold.co/50x50" alt="Placeholder Image" className="w-[50px] h-[50px] rounded-xl object-cover shrink-0" />
                <div className="min-w-0">
                    <p className="font-semibold text-slate-800 text-sm sm:text-base truncate">{"Name"}</p>
                    <div className="flex items-center gap-3 mt-1">
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">{2026}</p>
                        <p className="text-xs sm:text-sm text-amber-500 font-semibold flex items-center gap-0.5">&#9733; {9.9}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-3xl px-3 py-1.5 transition-colors">{"Queued"}</button>
                <button className="text-slate-400 hover:text-red-500 transition-colors p-1 text-sm sm:text-base font-bold">&#x274C;</button>
            </div>
        </div>
    )
}

export default MovieQueue