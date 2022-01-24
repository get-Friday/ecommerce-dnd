import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.theme.backgroundColor};
    color: #000;

    font-size: 1.5em;

    width: ${props => props.theme.width};
    height: ${props => props.theme.height};

    border-radius: 4px;
    border: none;

    cursor: pointer;
`
// PROPERTIES

Button.defaultProps = {
    theme: {
        width: '216px',
        height: '63px',
        backgroundColor: '#0CF0EB'
    }
}

export const addProduct = {
    width: '30px',
    height: '30px',
    backgroundColor: '#0CF032'
}

export const removeProduct = {
    width: '30px',
    height: '30px',
    backgroundColor: '#F00C0C'
}