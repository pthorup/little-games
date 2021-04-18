import React from 'react'
import Header from './Header'
import Home from './Home'
import MyLittlePony from '../sections/MyLittlePony/Home'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import TypingGame from '../sections/TypingGame/TypingGame'

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
                        <MyLittlePony />
                    </Route>
                </Switch>
                {/* <div className="app-menu">
                    <a className="app-link" href>
                        <div>Typing Game</div>
                    </a>
                    <a className="app-link" href>
                        <div>My Little Pony</div>
                    </a>
                </div> */}
            </main>
        </div>
    )
}

export default App
