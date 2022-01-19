import { useEffect, useState } from 'react'

import api from '../services/Api'

import Card from '../components/Card'

const Adventures = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        api
        .get('/productsList/')
        .then((res) => setProduct(res.data))
    }, [])

    const filter = product.filter(element => element.id_category === 2)

    return filter.map( el => (
        <Card productId={el.id} />
    ))
}

export default Adventures