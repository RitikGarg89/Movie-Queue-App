import React from 'react'

function NavBar() {
    return (
        <div>
            <h1>Movie Queue</h1>
            <form>
                <input type="search" name="search" id="earch" placeholder='Search..' />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default NavBar