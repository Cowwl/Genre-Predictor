import { Div, Text } from "atomize";
import axios from "axios";
import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Wave from 'react-wavify'
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
const Results = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(1)
        console.log(count)
        if(count === 1)
            getData();
    }, [count]);

    const getData = async () => {
        let res = await axios.get("http://localhost:8000/predict");
        setResult(res.data);
        setLoading(false);
        console.log(res.data)
    };
    return (
        <Div d="flex" justify="space-between" flexDir="column" overflow="hidden" h="100vh" bg="#E9A6A6">
            <Div d="flex" bg="#3F3351" w="100%" h="auto" justify="center" shadow="3" hoverShadow="4" className="nav" p="1%">
                <Text textColor="#E9A6A6" textSize="display3" textWeight="900" fontFamily="Questrial">
                    Genreriser
                </Text>
            </Div>
            <Text d="flex" textSize="display3" fontFamily="Questrial" textWeight="600" textColor="#1F1D36" align="center" justify="center" textAlign="center">
                Top 5 possible genres:
            </Text>
            <Div d="flex" bg="#E9A6A6" align="center" justify="center" textAlign="center" flexDir="column">
                {
                    result.map((item, index) => {
                        return (
                            <Text textSize="display2" textWeight="500" textColor="#1F1D36" fontFamily="Questrial" p="0.5%" key={index}>
                                {toTitleCase(item.Prediction)}: {Math.round(Number(item.Probability * 100))}%
                            </Text>
                        )
                    })

                }
            </Div>
            <Wave fill='#3F3351'
                paused={false}
                options={{
                    height: 40,
                    amplitude: 30,
                    speed: 0.4,
                    points: 3
                }}
            />
        </Div >
    );
}

export default Results;