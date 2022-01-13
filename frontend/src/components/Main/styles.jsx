import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MainWrapper = styled.div`
    width: 75%;

    display: flex;
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;

    padding: 10px 0px;
`

export const AsideWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 10px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 10px;

    width: 100%;
`

export const LinkMenu = styled.a`
    margin-bottom: 29px;
    
    font-size: 24px;
    color: #000;
    text-decoration: none;

    width: max-content;

    &:hover {
        font-weight: 700;
    }
`