import { Div, Text } from "atomize";
import "./Navbar.css"

const Navbar = () => {
    return (
        <Div d="flex" bg="#1E5128" w="100%" h="auto" justify="center" hoverShadow="3" className="nav" p="1%">
            <Text textColor="#D8E9A8" textSize="display3" textWeight="900" fontFamily="Questrial">
                Genre Predictor
            </Text>
        </Div>
    );
}

export default Navbar;