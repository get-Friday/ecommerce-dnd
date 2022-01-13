import { Button } from "./styles";

const ButtonApp = (props) => {
    return(
        <Button>
            {props.children}
        </Button>
    )
}

export default ButtonApp