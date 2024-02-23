import React, { useState } from 'react';
import { LuPenSquare, LuTrash2 } from 'react-icons/lu';

export const Todo = ({ task, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [completed, setCompleted] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editedTask);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`Todo ${completed ? 'completed' : ''}`}>
      {editing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <div className="Todo-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel} className='cancel-button'>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p onClick={handleToggleComplete} className={completed ? 'completed-task' : ''}>
            {task.task}
          </p>
          <div className="Todo-buttons">
            <button onClick={handleEdit} className='edit-button'>
              <LuPenSquare />
            </button>
            <button onClick={() => onDelete(task.id)} className='delete-button'>
              <LuTrash2 />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
