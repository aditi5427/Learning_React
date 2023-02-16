import React, { useState } from 'react';
import './App.css';

const App = () => {
    //const state = useState();
    const [count, setcount] = useState(0);

    const Increase = () => {
        return (
            setcount(count + 1)
        )
    };
    return (
        <>
            <h1 >{count}</h1>
            <button onClick={Increase}>Click</button>
        </>
    )

}
export default App;