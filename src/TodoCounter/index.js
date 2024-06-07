import React from "react";
import "./TodoCounter.css";

/**
 * Componente TodoCounter
 *
 * Este componente muestra el contador de TODOs completados y totales.
 *
 * Props:
 * - totalTodos: Número total de TODOs.
 * - completedTodos: Número de TODOs completados.
 * - loading: Indica si los datos están en proceso de carga.
 */

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>
    </h1>
  );
}

export { TodoCounter };
