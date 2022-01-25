import { 
    HeaderContainer, 
    HeaderWrapper, 
    Logo, 
    ShoppingContainer, 
    UserContainer, 
    CartContainer, 
    TextContainer,
    CartSize
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar'

const Header = ({ cartSize }) => {
    const display = cartSize && 'display'
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <Logo>
                    <Link to='/'>
                        DND Store
                    </Link>
                </Logo>
                <SearchBar />
                <ShoppingContainer>
                    <UserContainer>
                        <TextContainer>Olá, Gabriel</TextContainer>
                        <TextContainer>Sua conta<FontAwesomeIcon icon={faCaretDown} /></TextContainer>
                    </UserContainer>
                    <CartContainer>
                        <Link to='/purchase'>
                            <CartSize display={display}>{cartSize}</CartSize>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Carrinho
                        </Link>
                    </CartContainer>
                </ShoppingContainer>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header