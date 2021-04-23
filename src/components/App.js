import React from 'react'
import Header from './Header'
import Home from './Home'
import MyLittlePony from '../sections/MyLittlePony/Home'
import { Route, Switch } from 'react-router-dom'
import TypingGame from '../sections/TypingGame/TypingGame'
import { PonyDataContextProvider } from '../sections/MyLittlePony/PonyDataContextProvider'
import styled from 'styled-components'

import './App.css'

const StyledMain = styled.main`
    min-height: 500px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 960px;
    padding: 24px 48px;
`

const App = () => {
    return (
        <>
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
        </>
    )
}

export default App
