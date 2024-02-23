import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value == '') {
      setError('Please enter a task.');
      return;
    }

    addTodo(value);
    setValue('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError('');
        }}
        className="todo-input"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default TodoForm;
