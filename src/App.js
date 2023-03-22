import React, { useEffect, useState } from 'react';
import './App.css';
// import ToDo from "./ToDo";

const App = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect((num) => {
        alert('button pressed')
    }, [nums])

    return (
        <>
            <div>{num}</div>
            <button onClick={() => {
                setNum(num + 1)
            }
            }>click {num}</button>

            <button onClick={() => {
                setNums(nums + 1)
            }
            }>click {nums}</button>
        </>
    )
}
export default App;
