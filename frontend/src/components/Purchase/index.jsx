import { 
    PurchaseContainer, 
    PurchaseWrapper, 
    Break, 
    ContentWrapper, 
    TableContainer, 
    ProductsTable, 
    TableBody, 
    TableRow, 
    TableHeader, 
    TableData, 
    SubtotalContainer, 
    PricingWrapper, 
    Oversize, 
    Undersize, 
    AlignLeft, 
    DisplayPricing
} from './styles'

import Button from '../Button'
import { addProduct, removeProduct } from '../Button/styles'

const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

const Purchase = ({ cartItems, onRemove, onAdd }) => {

    const getTotalPrice = () => {
        let totalPrice = 0
        cartItems.map(product => totalPrice = totalPrice + (product.price * product.qty))
        return totalPrice
    }   

    // ICMS SC = 12%
    const getTaxValue = (totalPrice = getTotalPrice()) => totalPrice = totalPrice * 0.12

    const somaTotal = getTotalPrice() + getTaxValue()

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
                                                <Button theme={addProduct} action={() => onAdd(product)}>+</Button>
                                                <Button theme={removeProduct} action={() => onRemove(product)}>-</Button>
                                            </TableData>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </ProductsTable>
                    </TableContainer>
                    <SubtotalContainer>
                        SUBTOTAL
                        <PricingWrapper theme={cartItems.length && DisplayPricing}>
                            <p>Subtotal</p>
                            <p>{currency.format(getTotalPrice())}</p>
                        </PricingWrapper>
                        <PricingWrapper theme={cartItems.length && DisplayPricing}>
                            <p>Valor imposto</p>
                            <p>{currency.format(getTaxValue())}</p>
                        </PricingWrapper>
                        <hr />
                        <PricingWrapper theme={cartItems.length && DisplayPricing}>
                            <p>Total do pedido</p>
                            <p>{currency.format(somaTotal)}</p>
                        </PricingWrapper>
                    </SubtotalContainer>
                </ContentWrapper>
            </PurchaseWrapper>
        </PurchaseContainer>
    )
}

export default Purchase