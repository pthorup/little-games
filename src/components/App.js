import React from 'react'
import Header from './Header'
import Home from './Home'
import MyLittlePony from '../sections/MyLittlePony/Home'
import { Route, Switch } from 'react-router-dom'
import TypingGame from '../sections/TypingGame/TypingGame'
import { PonyDataContextProvider } from '../sections/MyLittlePony/PonyDataContextProvider'

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
                        <PonyDataContextProvider>
                            <MyLittlePony />
                        </PonyDataContextProvider>
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App
