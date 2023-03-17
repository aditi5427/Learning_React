import React, { useState } from 'react';
import './App.css';
// import ToDo from "./ToDo";

const App = () => {
    const [num, setNum] = useState(0);
    const increNum = () => {
        setNum(num + 1)
    }

    const decreNum = () => {
        if (num > 0) {
            setNum(num - 1)
        } else {
            alert('limit reached')
            setNum(0)
        }

    }

    return (
        <>
            <div>{num}</div>
            <button onClick={increNum}>Increase</button>
            <button onClick={decreNum}>Decrease</button>
        </>
    )
}
export default App;
