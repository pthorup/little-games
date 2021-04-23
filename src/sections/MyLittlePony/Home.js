import React, { useState } from 'react'
import PonyCategories from './PonyCategories'
import { Link, Switch, Route } from 'react-router-dom'
import PonySongs from './PonySongs'
import Favourites from './Favourites'
import PonyList from './PonyList'
import PonyDetail from './PonyDetail'
import StylePony from './StylePony'
import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    margin: 150px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #ffe500;
    margin: 0 24px 32px 24px;
    padding-bottom: 8px;
`
const StyledLink = styled(Link)`
    color: #0bbad6;
    font-family: 'Encode Sans', sans-serif;
    font-size: 18px;
    text-decoration: none;
    :hover {
        opacity: 0.7;
    }
`

const Home = () => {
    const [favourites, setFavourites] = useState([])

    const toggleFavourite = (ponyId) => {
        // Handle logic of adding and removing id from favourites
        const found = favourites.includes(ponyId)
        if (found) {
            setFavourites(favourites.filter((e) => e !== ponyId))
        } else {
            setFavourites((prev) => [...prev, ponyId])
        }
    }

    return (
        <StyledHome>
            <Nav>
                <StyledLink to="/my-little-pony/categories">
                    Categories
                </StyledLink>
                <StyledLink to="/my-little-pony/songs">Songs</StyledLink>
                <StyledLink to="/my-little-pony/favourites">
                    Favourites
                </StyledLink>
                <StyledLink to="/my-little-pony/style-pony">
                    Style Pony
                </StyledLink>
            </Nav>

            <Switch>
                <Route exact path="/my-little-pony/categories">
                    <PonyCategories />
                </Route>
                <Route exact path="/my-little-pony/categories/:ponyCat">
                    <PonyList />
                </Route>
                <Route path="/my-little-pony/categories/:ponyCat/:ponyId">
                    <PonyDetail
                        onFavouriteClick={toggleFavourite}
                        favourites={favourites}
                    />
                </Route>
                <Route path="/my-little-pony/songs">
                    <PonySongs />
                </Route>
                <Route path="/my-little-pony/style-pony">
                    <StylePony />
                </Route>
                <Route path="/my-little-pony/favourites">
                    <Favourites
                        onFavouriteClick={toggleFavourite}
                        favourites={favourites}
                    />
                </Route>
                <Image
                    src="/assets/img/my-little-pony/rainbow.png"
                    alt="rainbow"
                />
            </Switch>
        </StyledHome>
    )
}

export default Home
