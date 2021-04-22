import React from 'react'
import Header from './Header'
import Home from './Home'
import MyLittlePony from '../sections/MyLittlePony/Home'
import { Route, Switch } from 'react-router-dom'
import TypingGame from '../sections/TypingGame/TypingGame'
import { PonyDataContextProvider } from '../sections/MyLittlePony/PonyDataContextProvider'
import styled from 'styled-components'

import './App.css'

const StyledApp = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 24px 48px;
    border: 1px solid black;
`

const StyledMain = styled.main`
    border: 1px solid orange;
    min-height: 500px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`

function App() {
    return (
        <StyledApp>
            <Header />
            <StyledMain>
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
            </StyledMain>
        </StyledApp>
    )
}

export default App
