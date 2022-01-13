import { HeaderContainer, HeaderWrapper, Logo, ShoppingContainer, UserContainer, CartContainer, TextContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../SearchBar'

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <Logo>
                    DND Store
                </Logo>
                <SearchBar />
                <ShoppingContainer>
                    <UserContainer>
                        <TextContainer>Olá, Gabriel</TextContainer>
                        <TextContainer>Sua conta<FontAwesomeIcon icon={faCaretDown} /></TextContainer>
                    </UserContainer>
                    <CartContainer>
                        <FontAwesomeIcon icon={faShoppingCart} />Carrinho
                    </CartContainer>
                </ShoppingContainer>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header