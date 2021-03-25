import React from 'react'
import './GameInstruction.css'

const GameInstruction = (props) => {
    return (
        <div className="GameInstruction">{props.text}</div>
    )
}

export default GameInstruction
