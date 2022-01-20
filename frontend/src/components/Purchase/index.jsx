import { PurchaseContainer, PurchaseWrapper, Break, ContentWrapper, TableContainer, ProductsTable, TableRow, TableHeader, TableData, SubtotalContainer, Oversize} from './styles'

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
                                    <TableHeader theme={Oversize}>PRODUTO</TableHeader>
                                    <TableHeader>TIPO</TableHeader>
                                    <TableHeader>PREÇO</TableHeader>
                                    <TableHeader>AÇÃO</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                {cartItems.forEach(product => {
                                    <TableRow>
                                        <TableData>
                                            {product.name_product}
                                        </TableData>
                                        <TableData>
                                            {product.category}
                                        </TableData>
                                        <TableData>
                                            {currency.format(product.price)}
                                        </TableData>
                                        <TableData>
                                            Ação
                                        </TableData>
                                    </TableRow>
                                })}
                            </tbody>
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