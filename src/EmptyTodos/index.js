import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="Message-container">
      <p className='Message'>Crea un nuevo TODO</p>
    </div>
  );
}

export { EmptyTodos };