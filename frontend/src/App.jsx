import React, { useState } from 'react'

import {
    Route,
    Routes
} from 'react-router-dom'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Main from './components/Main'
import Purchase from './components/Purchase'

const App = () => {

    const [cartItems, setCartItems] = useState([])

    const onAdd = (product) => {
        const alreadyOnCart = cartItems.find(ele => ele.id === product.id)
        if(alreadyOnCart) {
            setCartItems(
                cartItems.map(ele => 
                    ele.id === product.id ? { ...alreadyOnCart, qty: alreadyOnCart.qty + 1 } : ele)
                )
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path='/' element={<Main onAdd={onAdd} />}/>
                <Route path='/purchase' element={<Purchase cartItems={cartItems} />}/>
            </Routes>
        </>
    )
}

export default App