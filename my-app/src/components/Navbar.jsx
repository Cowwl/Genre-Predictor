import { Div, Text } from "atomize";
import "./Navbar.css"

const Navbar = () => {
    return (
        <Div d="flex" bg="#1F1D36" w="100%" h="auto" justify="center" shadow="3" hoverShadow="4" className="nav" p="1%">
            <Text textColor="#E9A6A6" textSize="display3" textWeight="900" fontFamily="Questrial">
                Genreriser
            </Text>
        </Div>
    );
}

export default Navbar;