import React, { useState } from 'react'
import PonyCategories from './PonyCategories'
import { Link, Switch, Route } from 'react-router-dom'
import PonySongs from './PonySongs'
import Favourites from './Favourites'
// import PonyList from './PonyList'
// import PonyDetail from './PonyDetail'
import StylePony from './StylePony'

const Home = () => {
    const [favourites, setFavourites] = useState([])

    //console.log(favourites)
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
        <div>
            <Link to="/my-little-pony/categories">Categories</Link>
            <Link to="/my-little-pony/songs">Songs</Link>
            <Link to="/my-little-pony/favourites">Favourites</Link>
            <Link to="/my-little-pony/style-pony">Style Pony</Link>

            <Switch>
                <Route exact path="/my-little-pony/categories">
                    <PonyCategories />
                </Route>
                <Route exact path="/my-little-pony/categories/:ponyCat">
                    {/* <PonyList /> */}
                </Route>
                <Route path="/my-little-pony/categories/:ponyCat/:ponyId">
                    {/* <PonyDetail
                        onFavouriteClick={toggleFavourite}
                        favourites={favourites}
                    /> */}
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
            </Switch>
        </div>
    )
}

export default Home
