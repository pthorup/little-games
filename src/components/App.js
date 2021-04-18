import React from 'react'
import Header from './Header'
import Home from './Home'
import MyLittlePony from '../sections/MyLittlePony/Home'
import { Route, Switch } from 'react-router-dom'
import PonyListContext from '../sections/MyLittlePony/ponyListContext'
import TypingGame from '../sections/TypingGame/TypingGame'
import { data } from '../sections/MyLittlePony/my-little-pony-cat.json'

import './App.css'

function App() {
    return (
        <div className="app-container">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/typing-game">
                        <TypingGame />
                    </Route>
                    <Route path="/my-little-pony">
                        <PonyListContext.Provider value={data}>
                            <MyLittlePony />
                        </PonyListContext.Provider>
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App
