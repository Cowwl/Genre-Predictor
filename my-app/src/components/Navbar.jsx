import { Div, Text } from "atomize";
import "./Navbar.css"

const Navbar = () => {
    return (
        <Div d="flex" bg="#0295A9" w="100%" h="auto" justify="center" hoverShadow="3" className="nav" p="1%">
            <Text textColor="#FDD037" textSize="display3" textWeight="600" fontFamily="Questrial">
                Genre Predictor
            </Text>
        </Div>
    );
}

export default Navbar;