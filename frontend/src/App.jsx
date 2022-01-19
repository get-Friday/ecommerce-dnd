import React from 'react'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Main from './components/Main'
import Purchase from './components/Purchase'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
        </>
    )
}

export default App