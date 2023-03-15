import React from 'react';

const ToDo = (props) => {
    console.log(props);

    return (
        <>
            <div className="toDoStyle">
                <button onClick={() => {
                    props.onSelect(props.id)
                }
                }> * </button>
                <li>{props.text}</li>
            </div>
        </>
    );

}

export default ToDo;