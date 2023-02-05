import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import valentines from './Image/valentines.jpg';
const myElement = <App naam='aditi' pata='ashanagar' rollNo='3' />;
function App(props) {

    return (
        <>
            <div className='name'>My name is {props.naam}</div>
            <div className='address'>I live at {props.pata}</div>
            <div className='roll'>my roll no is {props.rollNo}</div>
        </>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);




export default App;
