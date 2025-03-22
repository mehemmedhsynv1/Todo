import { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const removedTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos?.map((todo)=> {
      if(todo.id !== newTodo.id){
        return todo;
      }else{
        return newTodo
      }
    })
    setTodos([...updatedTodos]);
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div className="App">
     <TodoCreate onCreateTodo={createTodo} />
     <TodoList todos={todos} onRemovedTodo={removedTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
