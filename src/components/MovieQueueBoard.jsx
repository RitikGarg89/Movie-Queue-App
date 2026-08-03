import React from 'react'
import MovieQueue from './MovieQueue'

function MovieQueueBoard({ movieQueue, toggleWatched, removeFromQueue }) {
    const queuedMovies = movieQueue.filter(movie => !movie.isWatched)
    const watchedMovies = movieQueue.filter(movie => movie.isWatched)

    return (
        <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6">
            {/* Header Summary */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-slate-200">
                <div>
                    <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">My Movie Queue</h2>
                    <p className="text-slate-500 mt-1">Track and manage your upcoming and watched movies</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0 font-medium">
                    <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded-2xl text-center shadow-sm">
                        <span className="block text-2xl font-bold">{queuedMovies.length}</span>
                        <span className="text-xs text-blue-600 uppercase tracking-wider">To Watch</span>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-2xl text-center shadow-sm">
                        <span className="block text-2xl font-bold">{watchedMovies.length}</span>
                        <span className="text-xs text-emerald-600 uppercase tracking-wider">Watched</span>
                    </div>
                </div>
            </div>

            {/* Columns Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Queued Section */}
                <div className="flex flex-col gap-4 bg-slate-50/50 p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
                            🍿 Queue List
                            <span className="bg-slate-205 text-slate-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                {queuedMovies.length}
                            </span>
                        </h3>
                    </div>

                    {queuedMovies.length === 0 ? (
                        <div className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-white border border-dashed border-slate-300 rounded-2xl">
                            <span className="text-4xl mb-2">🎬</span>
                            <h4 className="font-semibold text-slate-700">Queue is empty</h4>
                            <p className="text-sm text-slate-400 max-w-xs mt-1">Search for movies and add them to your queue to get started!</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {queuedMovies.map(movie => (
                                <MovieQueue
                                    key={movie.id}
                                    movie={movie}
                                    onToggleWatched={() => toggleWatched(movie.id)}
                                    onRemove={() => removeFromQueue(movie.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Watched Section */}
                <div className="flex flex-col gap-4 bg-slate-50/50 p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
                            ✅ Watched List
                            <span className="bg-slate-205 text-slate-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                {watchedMovies.length}
                            </span>
                        </h3>
                    </div>

                    {watchedMovies.length === 0 ? (
                        <div className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-white border border-dashed border-slate-300 rounded-2xl">
                            <span className="text-4xl mb-2">🎟️</span>
                            <h4 className="font-semibold text-slate-700">No watched movies yet</h4>
                            <p className="text-sm text-slate-400 max-w-xs mt-1">Mark queued movies as watched when you finish viewing them!</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {watchedMovies.map(movie => (
                                <MovieQueue
                                    key={movie.id}
                                    movie={movie}
                                    onToggleWatched={() => toggleWatched(movie.id)}
                                    onRemove={() => removeFromQueue(movie.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieQueueBoard