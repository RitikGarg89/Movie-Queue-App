import React from 'react'

function Loading() {
    return (
        <div className=''>
            <div className="flex flex-col items-center gap-3">
                <svg
                    className="w-14 h-14 animate-spin"
                    style={{ animationDuration: "1.2s" }}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <circle cx="12" cy="12" r="10" stroke="#4C5FD5" strokeWidth="2" />
                    <circle cx="12" cy="7" r="1.8" fill="#4C5FD5" />
                    <circle cx="17" cy="12" r="1.8" fill="#4C5FD5" />
                    <circle cx="12" cy="17" r="1.8" fill="#4C5FD5" />
                    <circle cx="7" cy="12" r="1.8" fill="#4C5FD5" />
                    <circle cx="12" cy="12" r="2.5" fill="#4C5FD5" />
                </svg>
                <p className="text-sm text-gray-500 font-medium">Loading movies...</p>
            </div>
        </div>
    )
}

export default Loading