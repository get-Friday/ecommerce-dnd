import { MainContainer, MainWrapper, ContentWrapper, CardContainer, AsideWrapper, MenuP  } from "./styles"

import { Outlet, Link } from 'react-router-dom'

import Carousel from "../Carousel"

const Main = () => {
    return(
        <MainContainer>
            <MainWrapper>
                <Carousel />
                <ContentWrapper>
                    <AsideWrapper>
                        <MenuP>
                            <Link to='/featured'>
                                Destaques
                            </Link>
                        </MenuP>
                        <MenuP>
                            <Link to='/blundes'>
                                Pacotes
                            </Link>
                        </MenuP>
                        <MenuP>
                            <Link to='/sourcebooks'>
                                Livros fonte
                            </Link>
                        </MenuP>
                        <MenuP>
                            <Link to='/adventures'>
                                Aventuras
                            </Link>
                        </MenuP>
                        <MenuP>
                            <Link to='/dices'>
                                Dados
                            </Link>
                        </MenuP>
                        <MenuP>
                            <Link to='/maps'>
                                Mapas
                            </Link>
                        </MenuP>
                    </AsideWrapper>
                    <CardContainer>
                        <Outlet />
                    </CardContainer>
                </ContentWrapper>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main