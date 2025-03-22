import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemovedTodo, updateTodo }) {
    const { id, content } = todo;

    const [update, setUpdate] = useState(true);
    const [updateValue, setUpdateValue] = useState(content);

    const removedTodo = () => {
        onRemovedTodo(id);
    }
    const updateTodos = () => {
        setUpdate(!update);
    }
    const change = () => {
        const request = {
            id : id,
            content : updateValue
        }
        updateTodo(request);
        setUpdate(true)
    }
  return (
    <div className='todo-list'>
        <div className='todo-list-main'>
            <div className='todo-text'>
                {
                    update ? (
                        <p>{content}</p>
                    ) : (
                        <input value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} type="text" />
                    )
                    
                }
               
            </div>
            <div className='todo-icons'>
                <MdDelete style={{cursor:"pointer"}} onClick={removedTodo} />
                {
                    update ? (
                        <IoIosCreate style={{cursor:"pointer"}} onClick={updateTodos}/>
                    ) : (
                        <FaCheck style={{cursor:"pointer"}} onClick={change}/>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default Todo