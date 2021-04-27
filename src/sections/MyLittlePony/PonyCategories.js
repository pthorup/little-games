import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import randomColor from 'randomcolor'

const Title = styled.h2`
    font-family: 'Encode Sans', sans-serif;
    font-size: 24px;
    text-align: center;
`

const Categories = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 300px;
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Encode Sans', sans-serif;
    font-size: 24px;
    height: 140px;
    width: 140px;
    text-shadow: 0px 0px 1px #c2c2c2;
    text-decoration: none;
    background-color: ${() => {
        return randomColor({
            luminosity: 'bright',
            hue: 'pink',
        })
    }};
    &:hover {
        transform: scale(1.1, 1.1);
    }
`

const PonyCategories = () => {
    const categories = useRef([
        'Alicorn',
        'Unicorn',
        'Earth',
        'Pegasus',
        'Dragon',
    ])

    return (
        <div>
            <Title data-testid='title'>Types of Ponies</Title>

            <Categories>
                {categories.current.map((category, index) => (
                    <div key={index}>
                        <StyledLink
                            data-testid='pony-cat'
                            to={`/my-little-pony/categories/${category}`}
                        >
                            {category}
                        </StyledLink>
                    </div>
                ))}
            </Categories>
        </div>
    )
}

export default PonyCategories
