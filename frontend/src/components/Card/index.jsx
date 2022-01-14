import { Component } from 'react'
import Api from '../../services/Api'

import { DetailsWrapper, ImageContainer, ImageLink,CardWrapper } from './styles'

import ButtonApp from '../Button'

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

class Card extends Component {
    
    state = {...initialState}

    componentDidMount() {
        Api
        .get('/productsList/1')
        .then((res) => {
            this.setState(res.data)
            // productslist traz um array de objetos, filtrar esse array para imprimir na tela onde feature: true
        })
    }
    
    render(){
        return(
            <CardWrapper>
                <ImageContainer>
                    <ImageLink src={this.state.image} alt={this.state.name_product} />
                </ImageContainer>
                <DetailsWrapper>
                    <h2>{this.state.name_product}</h2>
                    <p>{this.state.description}</p>
                    <p>Disponível | {currency.format(this.state.price)}</p>
                    <ButtonApp>Comprar</ButtonApp>
                </DetailsWrapper>
            </CardWrapper>
        )
    }
}

export default Card