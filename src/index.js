import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ----------------- Inline CSS-----------------
const inlineCss = {
    color: "black",
    fontSize: "20px"
};
ReactDOM.render(
    <div style={inlineCss}>
        <h1>Hello World</h1>
    </div>,
    document.getElementById('root')
)

// ----------------- Second HOmework -----------------
// const cTime = new Date().toLocaleTimeString();
// const cDate = new Date().toLocaleDateString();
// ReactDOM.render(
//     <div>
//         <h1>Hii,I am Aditi</h1>
//         <p>Here is the current time {cTime}</p>
//         <p>Here is the current date {cDate}</p>

//     </div>,
//     document.getElementById('root')
// )

// ----------------- Function -----------------
// const name = 'Aditi'
// ReactDOM.render(
//     <div>
//         <p>Hii i am {name}</p>
//         <p>add 2 + 3  is {2 + 3}</p>
//     </div>, document.getElementById('root'
//     ))

// ----------------- First Homework -----------------
// ReactDOM.render(
//     <div>
//         <h1>Netflix series</h1>
//         <p>List of 5 best series</p>
//         <ol>
//             <li>Wednesday</li>
//             <li>Stranger things</li>
//             <li>Mr Robort</li>
//             <li>Dark</li>
//             <li>Squid games</li>
//         </ol>
//     </div>,
//     document.getElementById('root'))

// ----------------- In form of array -----------------
// ReactDOM.render(
//     [
//         <h1>Hello</h1>,
//         <h2>i am Adiit</h2>
//     ],
//     document.getElementById('root'))

// ----------------- With the help of div, we can write multiple jsx -----------------
    // ReactDOM.render(
    //     <div>
    //         <h1>Hello</h1>
    //         <h2>i am Adiit</h2>
    //     </div>,
    //     document.getElementById('root'))

//----------------- JSX -----------------
// ReactDOM.render(<h1>Hello world</h1>,
//     document.getElementById('root'))