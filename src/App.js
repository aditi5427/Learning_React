import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [inputList, setInputList] = useState(" ");
    const [item, setItem] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listItem = () => {
        setItem((oldItem) => {
            return [...oldItem, inputList];
        });
        setInputList("  ");
    };

    return (
        <>
            <div className='toDo'>
                <input className='addList' type='text' placeholder='Add to-do list' value={inputList} onChange={itemEvent} />
                <button className='btn' onClick={listItem}> + </button>
                <ol>
                    {item.map((itemVal) => {
                        return <li>{itemVal}</li>
                    })
                    }
                </ol>
            </div>
        </>
    )
}

export default App;
