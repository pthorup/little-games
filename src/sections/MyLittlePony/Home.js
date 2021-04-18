import React from 'react'
import PonyCategories from './PonyCategories'
import { Link, Switch, Route } from 'react-router-dom'
import PonySongs from './PonySongs'
import Favourites from './Favourites'
import PonyList from './PonyList'
import PonyDetail from './PonyDetail'
import PonyListContext from './ponyListContext'

const Home = () => {
    return (
        <div>
            <Link to="/my-little-pony/categories">Categories</Link>
            <Link to="/my-little-pony/songs">Songs</Link>
            <Link to="/my-little-pony/favourites">Favourites</Link>

            <Switch>
                <Route exact path="/my-little-pony/categories">
                    <PonyCategories />
                </Route>
                <Route exact path="/my-little-pony/categories/:ponyCat">
                    <PonyListContext.Consumer>
                        {(data) => <PonyList ponies={data} />}
                    </PonyListContext.Consumer>
                </Route>
                <Route path="/my-little-pony/categories/:ponyCat/:ponyId">
                    <PonyListContext.Consumer>
                        {(data) => <PonyDetail ponies={data} />}
                    </PonyListContext.Consumer>
                </Route>
                <Route path="/my-little-pony/songs">
                    <PonySongs />
                </Route>
                <Route path="/my-little-pony/favourites">
                    <Favourites />
                </Route>
            </Switch>
        </div>
    )
}

export default Home
