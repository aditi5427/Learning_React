/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

const Slot = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x === y && y === z) {
        return (
            <>
                <h2>{x} {y} {z}</h2>
                <h2>This is matching</h2>
                <hr />
            </>
        )
    } else {
        return (
            <>
                <h2>{x} {y} {z}</h2>
                <h2>This is not matching</h2>
                <hr />
            </>
        )
    }
}

const App = () => {
    return (
        <>
            <h1>Matching game</h1>
            <Slot x='a' y='a' z='a' />
            <Slot x='a' y='b' z='a' />
            <Slot x='b' y='b' z='b' />
            <Slot x='a' y='c' z='a' />
            <Slot x='c' y='c' z='a' />



        </>

    )

}
export default App;