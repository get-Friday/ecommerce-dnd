import { MainContainer, MainWrapper, ContentWrapper, AsideWrapper, CardContainer, LinkMenu } from "./styles"

import Carousel from "../Carousel"
import Card from "../Card"

const Main = () => {
    return(
        <MainContainer>
            <MainWrapper>
                <Carousel />
                <ContentWrapper>
                    <AsideWrapper>
                        <LinkMenu href="#">Destaques</LinkMenu>
                        <LinkMenu href="#">Pacotes</LinkMenu>
                        <LinkMenu href="#">Livros fonte</LinkMenu>
                        <LinkMenu href="#">Aventuras</LinkMenu>
                        <LinkMenu href="#">Dados</LinkMenu>
                        <LinkMenu href="#">Mapas</LinkMenu>
                    </AsideWrapper>
                    <CardContainer>
                        <Card />
                        <Card />
                        <Card />
                    </CardContainer>
                </ContentWrapper>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main