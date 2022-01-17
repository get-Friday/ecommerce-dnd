import styled from 'styled-components'

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

export const MenuP = styled.p`
    margin: 0 0 29px 0;
    
    font-size: 24px;
    
    width: max-content;
    
    a {
        color: #000;
        text-decoration: none;
    }

    &:hover {
        font-weight: 700;
    }
`