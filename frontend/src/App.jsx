import React from 'react'

import {
    Route,
    Routes
} from 'react-router-dom'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Main from './components/Main'
import Purchase from './components/Purchase'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path='/' element={<Main />}/>
                <Route path='/purchase' element={<Purchase />}/>
            </Routes>
        </>
    )
}

export default App