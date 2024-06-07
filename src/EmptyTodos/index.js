import React from "react";
import "./EmptyTodos.css";

/**
 * Componente EmptyTodos
 *
 * Este componente representa un mensaje que se muestra cuando no hay ningún TODO.
 *
 * Muestra un mensaje indicando al usuario que cree su primer TODO.
 */

function EmptyTodos() {
  return (
    <div className="Message-container">
      <p className="Message">Crea tu primer TODO</p>
    </div>
  );
}

export { EmptyTodos };
