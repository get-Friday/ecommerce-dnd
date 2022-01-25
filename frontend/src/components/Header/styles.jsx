import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 75px;

    position: fixed;

    background-color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    a { 
        text-decoration: none;
    }
`

export const HeaderWrapper = styled.div`
    width: 75%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    font-size: 4rem;
    
    a {
        color: #F00;
    }
`

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFF;
`

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.p`
    margin: 0;
    margin-top: 5px;

    font-size: 1.2em;
`

export const CartContainer = styled.div`
    margin-left: 25px;
    font-size: 1.5em;

    a {
        display: flex;
        align-items: center;

        color: #FFF;
    }
`

export const CartSize = styled.div`
    padding: 5px 9px;
    margin-right: 5px;

    font-size: 12px;
    text-align: center;

    background-color: #f00;

    border-radius: 20px;

    display: ${props => props.display ? 'inline' : 'none'};
`