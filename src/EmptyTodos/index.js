import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="Message-container">
      <p className='Message'>Crea tu primer TODO</p>
    </div>
  );
}

export { EmptyTodos };