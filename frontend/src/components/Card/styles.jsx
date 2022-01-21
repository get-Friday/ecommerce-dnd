import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    padding: 10px;
`

export const ImageContainer = styled.div`
    width: 282px;
    height: 375px;

    padding: 10px;
`

export const ImageLink = styled.img`
    box-sizing: content-box;
    
    width: 272px;
    height: 365px;
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 10px;
`

export const TagCard = styled.div`
    display: ${props => props.theme.display};

    background-color: #C4C4C4;
    border-radius: 18px;

    padding: 10px;

    font-weight: 600;
    font-size: 18px;

    p {
        margin: 0 0 0 5px;
    }
`

// PROPERTIES

TagCard.defaultProps = {
    theme: {
        display: 'none'
    }
}

export const displayTag = {
    display: 'flex'
}