import { PurchaseContainer, PurchaseWrapper, Break, ContentWrapper, TableContainer, ProductsTable, TableBody, TableRow, TableHeader, TableData, SubtotalContainer, Oversize, Undersize, AlignLeft} from './styles'

const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

const Purchase = ({ cartItems }) => {

    return(
        <PurchaseContainer>
            <PurchaseWrapper>
                <h1>MEU CARRINHO</h1>
                <Break />
                <ContentWrapper>
                    <TableContainer>
                        {cartItems.length ? 'Detalhes do pedido' : 'Carrinho vazio'}
                        <ProductsTable>
                            <thead>
                                <TableRow>
                                    <TableHeader theme={Undersize}>QNT</TableHeader>
                                    <TableHeader theme={Oversize}>PRODUTO</TableHeader>
                                    <TableHeader>TIPO</TableHeader>
                                    <TableHeader>PREÇO</TableHeader>
                                    <TableHeader>AÇÃO</TableHeader>
                                </TableRow>
                            </thead>
                            <TableBody>
                                {cartItems.map(product => {
                                    return(
                                        <TableRow>
                                            <TableData>
                                                {product.qty}
                                            </TableData>
                                            <TableData theme={AlignLeft}>
                                                {product.name_product}
                                            </TableData>
                                            <TableData>
                                                {product.category}
                                            </TableData>
                                            <TableData>
                                                {currency.format(product.price * product.qty)}
                                            </TableData>
                                            <TableData>
                                                Ação
                                            </TableData>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
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