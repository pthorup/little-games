import React from 'react'
import Header from './Header'
import MyLittlePony from '../sections/MyLittlePony/MyLittlePony'

import './App.css'

function App() {
    return (
        <div className="app-container">
            <Header />
            <main>
                {/* <div className="app-menu">
                    <a className="app-link" href>
                        <div>Typing Game</div>
                    </a>
                    <a className="app-link" href>
                        <div>My Little Pony</div>
                    </a>
                </div> */}
                <MyLittlePony />
            </main>
        </div>
    )
}

export default App
