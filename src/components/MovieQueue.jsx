import React from 'react'

function MovieQueue({ movie, onToggleWatched, onRemove }) {
    const title = movie?.title || "Name";
    const year = movie?.release_date ? movie.release_date.split('-')[0] : 2026;
    const rating = movie?.vote_average ? movie.vote_average.toFixed(1) : "8.9";
    const poster = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : "https://placehold.co/100x150?text=No+Poster";

    return (
        <div className="relative flex bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden h-[100px] w-full">
            {/* Left Movie Info Section */}
            <div className="flex flex-1 items-center p-3 gap-3 min-w-0">
                <img 
                    src={poster} 
                    alt={title} 
                    className="w-[50px] h-[74px] rounded-lg object-cover shrink-0 border border-slate-100 shadow-sm"
                />
                <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base truncate leading-tight">{title}</h4>
                    <div className="flex items-center gap-3 mt-1.5 text-xs font-semibold">
                        <span className="text-slate-450 font-medium">{year}</span>
                        <span className="text-amber-500 flex items-center gap-0.5">&#9733; {rating}</span>
                    </div>
                </div>
            </div>

            {/* Perforation Line & Notches */}
            <div className="relative flex flex-col justify-between items-center w-[20px] h-full shrink-0 select-none">
                {/* Top Notch Cutout */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f1f1f1] border border-slate-200 z-10"></div>
                
                {/* Perforation Dashed Line */}
                <div className="h-full border-l-2 border-dashed border-slate-250 my-2"></div>
                
                {/* Bottom Notch Cutout */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#f1f1f1] border border-slate-200 z-10"></div>
            </div>

            {/* Right Action/Stub Section */}
            <div className="flex items-center justify-center px-3 sm:px-4 gap-1.5 sm:gap-2.5 shrink-0 bg-slate-50/40 w-[120px] sm:w-[140px]">
                <button 
                    onClick={onToggleWatched}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm ${
                        movie.isWatched 
                            ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-200' 
                            : 'bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-200'
                    }`}
                >
                    {movie.isWatched ? 'Watched' : 'Watch'}
                </button>
                <button 
                    onClick={onRemove}
                    title="Remove from queue"
                    className="text-slate-400 hover:text-red-500 transition-colors p-1 text-sm font-bold cursor-pointer rounded-full hover:bg-slate-100/80"
                >
                    ❌
                </button>
            </div>
        </div>
    )
}

export default MovieQueue