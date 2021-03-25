import React from 'react'
import './GameImage.css'

const GameImage = (props) => {
    return (
        <img
            className="GameImage"
            src={`/assets/img/type-game/${props.image}`}
            alt={props.text}
        />
    )
}

export default GameImage
