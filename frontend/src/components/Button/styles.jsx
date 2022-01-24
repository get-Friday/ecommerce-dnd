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

    :hover {
        background-color: ${props => props.theme.hover};
    }
`
// PROPERTIES

Button.defaultProps = {
    theme: {
        width: '216px',
        height: '63px',
        backgroundColor: '#0cf0eb',
        hover: 'rgba(12, 240, 235, 0.7)'
    }
}

export const addProduct = {
    width: '30px',
    height: '30px',
    backgroundColor: '#0cf032',
    hover: 'rgba(12, 240, 50, 0.7)'
}

export const removeProduct = {
    width: '30px',
    height: '30px',
    backgroundColor: '#f00c0c',
    hover: 'rgba(240, 12, 12, 0.7)'
}