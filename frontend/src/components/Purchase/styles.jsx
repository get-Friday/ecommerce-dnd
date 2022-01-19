import styled from 'styled-components'

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

export const ContentWrapper = styled.div`
    display: flex;

    padding: 10px;
`

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Break = styled.hr`
    background-color:#0CF0EB;;

    border: none;

    height: 3px;
    width: 100%;
`

export const ProductsTable = styled.table`
    border: none;

    padding: 10px;
`

export const TableRow = styled.tr`
    padding: 5px;
`

export const TableHeader = styled.th`
    background-color: #E9E9E9;

    padding: 5px;

    width: ${props => props.theme.size};
`

export const TableData = styled.td`
    background-color: #C4C4C4;

    padding: 5px;
`

TableHeader.defaultProps = {
    theme: {
        size: '142px'
    }
}

export const Oversize = {
    size: '404px'
}