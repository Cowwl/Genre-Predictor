import { Div, Text } from "atomize";
import axios from "axios";
import { useState, useEffect } from 'react';
const Results = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        console.log("hi")
        let res = await axios.get("http://localhost:8000/predict");
        setResult(res.data);
    };
    return (
        <div>
            {result.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            })}
        </div>
    );
}

export default Results;