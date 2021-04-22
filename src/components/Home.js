import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
    border: 1px solid purple;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
`

const StyledLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-family: 'Encode Sans', sans-serif;
    font-size: 24px;
    text-decoration: none;
    height: 200px;
    width: 200px;
    background: ${({ gameType }) => {
        if (gameType === 'typingGame') return '#56ab2f'
        else if (gameType === 'myLittlePony') return '#f953c6'
        else return 'blue'
    }};

    background: ${({ gameType }) => {
        if (gameType === 'typingGame')
            return 'linear-gradient(to bottom, #a8e063, #56ab2f)'
        else if (gameType === 'myLittlePony')
            return 'linear-gradient(to top, #b91d73, #f953c6)'
        else return 'blue'
    }};
    &:hover {
        transform: scale(1.1, 1.1);
    }
`

function Home() {
    return (
        <StyledHome>
            <StyledLink to="/typing-game" gameType={'typingGame'}>
                Typing Game
            </StyledLink>
            <StyledLink to="/my-little-pony" gameType={'myLittlePony'}>
                My Little Pony
            </StyledLink>
        </StyledHome>
    )
}

export default Home
