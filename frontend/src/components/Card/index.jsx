import { Component } from 'react'
import Api from '../../services/Api'

import { DetailsWrapper, ImageContainer, CardWrapper } from './styles'

import ButtonApp from '../Button'

const initialState = {
    id: '',
    category: '',
    id_category: '',
    name_product: '',
    price: 0,
    featured: false,
    image: '',
    description: ''
}

class Card extends Component {
    
    state = {...initialState}

    componentDidMount() {
        Api
        .get('/productsList/1')
        .then((res) => {
            this.setState(res.data)
        })
    }
    
    render(){
        return(
            <CardWrapper>
                <ImageContainer />
                <DetailsWrapper>
                    <h2>{this.state.name_product}</h2>
                    <p>{this.state.description}</p>
                    <p>disponível | {this.state.price}</p>
                    <ButtonApp>Comprar</ButtonApp>
                </DetailsWrapper>
            </CardWrapper>
        )
    }
}

export default Card