import React from 'react'
import './GameEnd.css'

const GameEnd = (props) => {
    return (
        <div className="GameEnd">
            <span className="GameEnd-award">{props.award}</span>
            <button className="GameEnd-btnReset" onClick={props.onGameReset}>
                New Game
            </button>
        </div>
    )
}

export default GameEnd
