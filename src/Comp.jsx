import React from 'react';

function Comp() {
    let currTime = new Date(2023, 1, 7, 14);
    currTime = currTime.getHours();

    let greeting = " ";
    let color = {};

    if (currTime >= 1 && currTime < 12) {
        greeting = 'Good Morning';
        color.color = 'green';
    } else if (currTime >= 12 && currTime < 19) {
        greeting = 'Good Afternoon';
        color.color = 'orange';
    } else {
        greeting = 'Good Night';
        color.color = "pink";
    }

    return (
        <>
            <h1>Hello, <span style={color}>{greeting}</span> </h1>
        </>

    )


}

export default Comp;