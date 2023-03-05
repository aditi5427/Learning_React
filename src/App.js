import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [name, setName] = useState()
    const [fullName, setfullname] = useState();

    const innerEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit = () => {
        setfullname(name);
    }


    return (
        <>
            <h1>hello {fullName}</h1>
            <input type='text' placeholder='Enter youe name' onChange={innerEvent} />
            <button onClick={onSubmit} >Click</button>
        </>
    )
};

export default App;

