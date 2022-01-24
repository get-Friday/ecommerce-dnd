import { 
    MainContainer, 
    MainWrapper, 
    ContentWrapper, 
    CardContainer, 
    AsideWrapper, 
    MenuP,
    Disabled
} from "./styles"

import Carousel from "../Carousel"
import ListCards from '../ListCards'

import { useState } from "react"

    const Main = ({ onAdd }) => {

    const [category, setCategory] = useState(0)

    return(
        <MainContainer>
            <MainWrapper>
                {/* <Carousel /> TODO CAROUSEL COMPONENT */}
                <ContentWrapper>
                    <AsideWrapper>
                        <MenuP isActive={category === 0} onClick={() => setCategory(0)}>
                            Destaques
                        </MenuP>
                        <Disabled>
                            Pacotes
                        </Disabled>
                        <MenuP isActive={category === 1} onClick={() => setCategory(1)}>
                            Livros fonte
                        </MenuP>
                        <MenuP isActive={category === 2} onClick={() => setCategory(2)}>
                            Aventuras
                        </MenuP>
                        <MenuP isActive={category === 2} onClick={() => setCategory(3)}>
                            Dados
                        </MenuP>
                        <Disabled>
                            Mapas
                        </Disabled>
                    </AsideWrapper>
                    <CardContainer>
                        <ListCards onAdd={onAdd} preorder={category === 0} featured={category === 0} categoryId={category}/>
                    </CardContainer>
                </ContentWrapper>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main