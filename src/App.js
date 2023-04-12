import React from 'react';
import './App.css';

//Importing navbar component
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from '.Contact';
import Service from './Service';
// import ToDo from "./ToDo";

const App = () => {

    return (
        <>
            <h1>hello world</h1>
            <Home />
            <AboutUs />
            <Contact />
            <Service />
        </>
    )
};
export default App;
