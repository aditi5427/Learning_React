import React from 'react';
import { ReactDOM } from 'react';
import './App.css';


//------------Array Map------------
// const arr = ['potato', 'tomato', 'onion'];
// let newArr = arr.map(function (val) {
//     return val
// });
//----Array Map arrow function----
// const newArr = arr.map((val) => val);
// console.log(newArr)
//------------Array Map------------

function App({
    person,
    age,
    address
}) {
    return (
        <>
            <div className='person'>My name is {person}</div>
            <div className='age'>age is {age}</div>
            <div className='address'>address is {address}</div>
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
