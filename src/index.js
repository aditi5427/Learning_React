
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import valentines from './Image/valentines.jpg'
// import Comp from './Comp';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

// ----------------- Import & Export Module Homework -----------------
// import add, {sub, multi, div} from './Module'
// ReactDOM.render(
//     <>
//     <ul>
//         <li>sum {add (2,4) }</li>
//         <li>sub {sub (8,4) }</li>
//         <li>multiply { multi (3,5)}</li>
//         <li>divide {div(8,2) }</li>
//     </ul>
//     </>,
//     document.getElementById('root')
// )

// ----------------- Component -----------------
// ReactDOM.render(
//     <>
//     <Comp></Comp>
//     </>,
//     document.getElementById('root')
// )


// ----------------- Third HOmework -----------------IMPORTANT-------------------
// let cTime = new Date(2023, 1, 5, 5);
// cTime = cTime.getHours();

// let greeting = ' ';
// let css = {};

// if (cTime >= 1 && cTime < 12) {
//     greeting = 'Good Morning';
//     css.color = 'green';

// } else if (cTime >= 12 && cTime < 19) {
//     greeting = 'Good Afternoon';
//     css.color = 'yellow';

// } else {
//     greeting = 'Good Night';
//     css.color = 'black';
// }

// ReactDOM.render(
//     <>
//         <h1>Hello, <span style={css}>{greeting}</span> </h1>
//     </>,
//     document.getElementById('root')
// )


// ----------------- Inline CSS-----------------
// const inlineCss = {
//     color: "black",
//     fontSize: "20px"
// };
// ReactDOM.render(
//     <div style={inlineCss}>
//         <h1>Hello World</h1>
//     </div>,
//     document.getElementById('root')
// )


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


//         <p>Hii i am {name}</p>
//         <p>add
// ----------------- Function -----------------
// const name = 'Aditi'
// ReactDOM.render(
//     <div> 2 + 3  is {2 + 3}</p>
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