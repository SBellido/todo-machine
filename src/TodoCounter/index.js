import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>
    </h1>
  );
}

export { TodoCounter };
