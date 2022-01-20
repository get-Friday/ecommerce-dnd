import { PurchaseContainer, PurchaseWrapper, Break, ContentWrapper, TableContainer, ProductsTable, TableRow, TableHeader, TableData, SubtotalContainer, Oversize} from './styles'

const Purchase = () => {
    return(
        <PurchaseContainer>
            <PurchaseWrapper>
                <h1>MEU CARRINHO</h1>
                <Break />
                <ContentWrapper>
                    <TableContainer>
                        Detalhes do pedido
                        <ProductsTable>
                            <TableRow>
                                <TableHeader theme={Oversize}>PRODUTO</TableHeader>
                                <TableHeader>TIPO</TableHeader>
                                <TableHeader>PREÇO</TableHeader>
                                <TableHeader>AÇÃO</TableHeader>
                            </TableRow>
                            <TableRow>
                                <TableData>PRODUTO</TableData>
                            </TableRow>
                        </ProductsTable>
                    </TableContainer>
                    <SubtotalContainer>
                        SUBTOTAL
                    </SubtotalContainer>
                </ContentWrapper>
            </PurchaseWrapper>
        </PurchaseContainer>
    )
}

export default Purchase