import React from 'react'

import { CardContainer, AsideWrapper, MenuP } from './Styles.jsx'

import { Outlet, Link } from 'react-router-dom'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main>
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
            </Main>
        </>
    )
}

export default App