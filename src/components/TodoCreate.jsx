import React, { useState } from 'react';
import '../css/Todo.css';

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState();

    const createTodo = () => {
        if(!newTodo) return;

        const request = {
            id : Math.floor(Math.random() * 9999999),
            content : newTodo
        }
        onCreateTodo(request);
    }

    
  return (
    <div className='todo-main'>
        <div className='todo-input'>
            <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            id='todo-input' type="text" />
        </div>
        <div className='todo-button-div'>
            <button onClick={createTodo} id='todo-button'>To Do yarat</button>
        </div>
    </div>
  )
}

export default TodoCreate