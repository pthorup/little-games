import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    color: #fff;
    .typingGame {
        background: #0bbad6;
    }
    .myLittlePony {
        background: #4609b3;
    }
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
    &:hover {
        transform: scale(1.1, 1.1);
    }
`

function Home() {
    return (
        <StyledHome>
            <StyledLink to="/typing-game" className="typingGame">
                Typing Game
            </StyledLink>
            <StyledLink to="/my-little-pony" className="myLittlePony">
                My Little Pony
            </StyledLink>
        </StyledHome>
    )
}

export default Home
