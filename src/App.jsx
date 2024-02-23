// App.js

import React, { useState } from 'react';
import { Todo } from './components/Todo';
import TodoForm from './components/TodoForm';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, task: todo },
    ]);
  };

  const onDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const onEdit = (id, editedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: editedTask } : todo
      )
    );
  };

  return (
    <>
      <div className="wrapper">
        <h1>TODOLIST</h1>

        <TodoForm addTodo={addTodo} />

        {todos.map((todo) => (
          <Todo key={todo.id} task={todo} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}

export default App;
