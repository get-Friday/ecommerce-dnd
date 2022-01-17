import { MainContainer, MainWrapper, ContentWrapper } from "./styles"

import Carousel from "../Carousel"

const Main = ({ children }) => {
    return(
        <MainContainer>
            <MainWrapper>
                <Carousel />
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main