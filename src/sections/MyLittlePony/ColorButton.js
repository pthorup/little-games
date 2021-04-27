import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    &:hover {
        transform: scale(1.1, 1.1);
    }
`

const ColorButton = React.memo(({ onClickHandler, colors }) => {
    return colors.map((color) => (
        <StyledButton
            data-testid='color-btn'
            key={color}
            color={color}
            onClick={onClickHandler}
        >
            {' '}
        </StyledButton>
    ))
})

export default ColorButton
