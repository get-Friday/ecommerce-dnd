import { Button } from "./styles";

const ButtonApp = ({ children, action, theme }) => {

    return(
        <Button onClick={action} theme={theme}>
            {children}
        </Button>
    )
}

export default ButtonApp