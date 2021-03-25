import React from 'react'
import './GameEnd.css'

const GameEnd = (props) => {
    return (
        <div className="GameEnd">
            <span>{props.award}</span>
            <button onClick={props.onGameReset}>New Game</button>
        </div>
    )
}

export default GameEnd
