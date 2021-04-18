import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-container">
            <p>Home content</p>
            <p>
                <Link to="/typing-game">Typing Game</Link>
            </p>
            <p>
                <Link to="/my-little-pony">My Little Pony</Link>
            </p>
        </div>
    )
}

export default Home
