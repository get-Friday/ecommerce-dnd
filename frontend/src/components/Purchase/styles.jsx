import styled from 'styled-components'

//  SETTING WIDTH SIZE

export const PurchaseContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const PurchaseWrapper = styled.div`
    width: 75%;

    padding-top: 15px;

    display: flex;
    flex-direction: column;
`

// CONTENT CONTAINERS

export const ContentWrapper = styled.div`
    display: flex;

    padding: 10px;
`

export const TableContainer = styled.div`
    flex-direction: column;

    width: max-content;
`

export const SubtotalContainer = styled.div`
    flex-direction: column;

    width: 20%;

    hr {
        width: 100%;
    }
`

export const PricingWrapper = styled.div`
    display: ${props => props.theme.display};
    justify-content: space-between;

    p {
        margin: 0;
        padding: 5px;
    }
`

export const Break = styled.hr`
    background-color:#0CF0EB;;

    border: none;

    height: 3px;
    width: 100%;
`

export const ProductsTable = styled.table`
    border: none;

    border-collapse: collapse;

    margin: 10px;
`

export const TableBody = styled.tbody`
    border: 1px solid lightgray;
`

export const TableRow = styled.tr`
    padding: 5px;
`

export const TableHeader = styled.th`
    border: 1px solid lightgray;
    border-bottom: 3px solid gray;

    padding: 10px;

    width: ${props => props.theme.size};
`

export const TableData = styled.td`
    background-color: #F7F7F7;

    padding: 10px;

    text-align: ${props => props.theme.content};
`

// PROPERTIES

TableData.defaultProps = {
    theme: {
        content: 'center'
    }
}

export const AlignLeft = {
    content: 'left'
}

TableHeader.defaultProps = {
    theme: {
        size: '142px'
    }
}

export const Oversize = {
    size: '333px'
}

export const Undersize = {
    size: '71px'
}

PricingWrapper.defaultProps = {
    theme: {
        display: 'none'
    }
}

export const DisplayPricing = {
    display: 'flex'
}