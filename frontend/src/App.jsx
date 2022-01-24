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
        const exist = cartItems.find(prod => prod.id === product.id)
        if(exist) {
            setCartItems(
                cartItems.map(prod => 
                    prod.id === product.id ? { ...exist, qty: exist.qty + 1 } : prod
                )
            )
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    const onRemove = (product) => {
        const selectedProduct = cartItems.find(prod => prod.id === product.id)
        const qtySize = selectedProduct.qty
        if (qtySize === 1) {
            setCartItems(
                cartItems.filter(prod => prod.id !== product.id)        
            )
        } else {
            setCartItems(
                cartItems.map(prod => 
                    prod.id === product.id ? { ...selectedProduct, qty: selectedProduct.qty - 1 } : prod
                )
            )
        }
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path='/' element={
                    <Main 
                        onAdd={onAdd} 
                    />
                }/>
                <Route path='/purchase' element={
                    <Purchase 
                        onAdd={onAdd}
                        onRemove={onRemove}
                        cartItems={cartItems} 
                    />
                }/>
            </Routes>
        </>
    )
}

export default App