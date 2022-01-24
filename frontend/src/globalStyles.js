import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* TODO: FIX FONT NOT WORKING */
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    body {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle