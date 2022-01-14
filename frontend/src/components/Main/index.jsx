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
                        <Card productId='1'/>
                        <Card productId='2'/>
                        <Card productId='3'/>
                        <Card productId='4'/>
                        <Card productId='5'/>
                    </CardContainer>
                </ContentWrapper>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main