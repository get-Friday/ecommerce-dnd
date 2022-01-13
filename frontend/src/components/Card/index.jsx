import { DetailsWrapper, ImageContainer, CardWrapper } from './styles'

import ButtonApp from '../Button' 

const Card = () => {
    return(
        <CardWrapper>
            <ImageContainer />
            <DetailsWrapper>
                <h2>TITULOzão</h2>
                <p>description</p>
                <p>disponível | preço</p>
                <ButtonApp>Comprar</ButtonApp>
            </DetailsWrapper>
        </CardWrapper>
    )
}

export default Card