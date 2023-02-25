import React, { useState } from 'react';
import './App.css';

const App = () => {
    const color = "yellow";
    const [bg, setbg] = useState(color)

    const changeColor = () => {
        let newBg = "green"
        setbg(newBg);
    };
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={changeColor}> click me</button>
            </div>
        </>
    )
}
export default App;