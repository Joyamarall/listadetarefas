import React from 'react';

const TodoItem = ({ task, removeTask }) => {
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </div>
  );
};

export default TodoItem;
