import { useState, useEffect } from 'react'

import api from '../../services/Api'

import Card from '../Card'

const SourceBooks = ({ featured, categoryId, onAdd }) => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        api
        .get('/productsList/')
        .then((res) => setProduct(res.data))
    }, [])

    const filterCategory = product.filter(element => 
        featured ? element.featured || element.preorder : element.id_category === categoryId
    )

    const sortPreorder = filterCategory.sort((firstElement) => {
        if (firstElement.preorder) { 
            return -1
        } else return 1
    })
    
    return sortPreorder.map( el => (
        <Card onAdd={onAdd} productId={el.id} />
    ))
}

export default SourceBooks