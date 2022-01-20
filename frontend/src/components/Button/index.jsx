import { Button } from "./styles";

const ButtonApp = ({ children, onAdd }) => {

    return(
        <Button onClick={onAdd}>
            {children}
        </Button>
    )
}

export default ButtonApp