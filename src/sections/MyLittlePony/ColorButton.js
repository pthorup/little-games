import React from 'react'

const ColorButton = React.memo(({ onClickHandler, colors }) => {
    return colors.map((color) => (
        <button
            key={color}
            style={{ backgroundColor: color, width: '50px', height: '50px' }}
            onClick={onClickHandler}
        >
            {' '}
        </button>
    ))
})

export default ColorButton
