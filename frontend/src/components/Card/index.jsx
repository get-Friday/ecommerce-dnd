import { useState, useEffect } from 'react'
import api from '../../services/Api'

import { DetailsWrapper, ImageContainer, ImageLink, CardWrapper, FeaturedTag } from './styles'

import ButtonApp from '../Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const initialState = {
    id: '',
    category: '',
    id_category: '',
    name_product: 'Carregando',
    price: 0,
    featured: false,
    image: '',
    description: 'carregando descrição'
}

const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

const Card = ({ productId }) => {
    
    const [product, setProduct] = useState(initialState)

    useEffect(() => {
        api
        .get(`/productsList/${productId}`)
        .then((res) => {
            setProduct(res.data)
        })
    }, [])

    const featuredIcon = () => {
        const featured = product.featured
        return featured ? 'flex' : 'none'
    }

 
    return(
        <CardWrapper>
            <ImageContainer>
                <ImageLink src={product.image} alt={product.name_product} />
            </ImageContainer>
            <DetailsWrapper>
                <FeaturedTag display={featuredIcon}>
                    <FontAwesomeIcon icon={faStar} />
                    <p>DESTAQUE</p>
                </FeaturedTag>
                <h1>{product.name_product}</h1>
                <p>{product.description}</p>
                <p>Disponível | {currency.format(product.price)}</p>
                <ButtonApp>Comprar</ButtonApp>
            </DetailsWrapper>
        </CardWrapper>
    )

}

export default Card