import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    font-family: 'Encode Sans', sans-serif;
    color: #ff0079;
`
const StyledLink = styled(Link)`
    font-size: 50px;
    text-decoration: none;
`

const Header = () => {
    return (
        <StyledHeader>
            <Title>My Little Games</Title>
            <StyledLink to="/">🏠</StyledLink>
        </StyledHeader>
    )
}

export default Header
