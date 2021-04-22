import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
`

const Title = styled.h1`
    font-family: 'Encode Sans', sans-serif;
    color: #ebae34;
`
const StyledLink = styled(Link)`
    font-size: 50px;
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
