import React, { useState } from 'react';
import './App.css';
import ToDo from "./ToDo";

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

    const deleteItem = (id) => {
        console.log('deleted');

        setItem((oldItem) => {
            return oldItem.filter((arrElem, index) => {
                return index !== id;

            });
        });

    };
    return (
        <>
            <div className='toDo'>
                <input className='addList' type='text' placeholder='Add to-do list' value={inputList} onChange={itemEvent} />
                <button className='btn' onClick={listItem}> + </button>
                <ol>
                    {item.map((itemVal, index) => {
                        return <ToDo
                            key={index}
                            id={index}
                            text={itemVal}
                            onSelect={deleteItem} />
                    })
                    }
                </ol>

            </div>
        </>
    )
}

export default App;
