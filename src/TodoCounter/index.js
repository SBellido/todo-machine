import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const message = 
  // total === 0
  //   ? 'La bandeja de TODOS está vacía'
  //   : total === completed
  //   ? '¡Felicidades! ¡Has completado todos tus TODOS!' : 
    `Has completado ${completed} de ${total} TODOS`;

  return (
    <h1 className="TodoCounter">
      {message}
    </h1>
  );
}

export { TodoCounter };
