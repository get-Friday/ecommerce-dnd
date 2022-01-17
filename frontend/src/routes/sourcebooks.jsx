import { useState, useEffect } from 'react'

import api from '../services/Api'

import Card from '../components/Card'

const SourceBooks = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        api
        .get('/productsList/')
        .then((res) => setProduct(res.data))
    }, [])

    const filter = product.filter(element => element.id_category === 1)

    return filter.map( el => (
        <Card productId={el.id} />
    ))
}

export default SourceBooks