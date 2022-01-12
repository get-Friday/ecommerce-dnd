import { SearchBarContainer, SearchInput } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return(
        <SearchBarContainer>
            <FontAwesomeIcon icon={faSearch} />
            <SearchInput placeholder='Procure produtos...'/>
        </SearchBarContainer>
    )
}

export default SearchBar