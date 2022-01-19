import { useState, useEffect } from 'react'

import api from '../../services/Api'

import Card from '../Card'

const SourceBooks = ({ featured ,categoryId }) => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        api
        .get('/productsList/')
        .then((res) => setProduct(res.data))
    }, [])

    const filter = product.filter(element => featured ? element.featured : element.id_category === categoryId)

    return filter.map( el => (
        <Card productId={el.id} />
    ))
}

export default SourceBooks