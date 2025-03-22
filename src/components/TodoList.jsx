import React from 'react';
import Todo from './Todo';

function TodoList({ todos, onRemovedTodo, updateTodo}) {
  return (
    <div>
        {
            todos && todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onRemovedTodo={onRemovedTodo} updateTodo={updateTodo} />
            ))
        }
    </div>
  )
}

export default TodoList