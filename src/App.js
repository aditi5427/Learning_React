import React from 'react';
import './App.css';

function App() {
    function handleCalc(e) {
        e.preventDefault()
        const firstNum = e.target.first.value;
        const secNum = e.target.second.value;

        console.log(firstNum);
        console.log(secNum);
        console.log(parseInt(firstNum) + parseInt(secNum));
        console.log(parseInt(firstNum) * parseInt(secNum));
    }
    return (
        <form onSubmit={handleCalc} className="App">
            <input type='number' name='first' />
            <input type='number' name='second' />
            <button>submit</button>
        </form>
    );
}

export default App;
