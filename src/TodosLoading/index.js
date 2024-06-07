import React from "react";
import "./TodosLoading.css";

/**
 * Componente TodosLoading
 *
 * Este componente representa un indicador de carga mientras se cargan los TODOs.
 *
 * Muestra un mensaje y símbolos indicando al usuario que la carga está en proceso.
 */

function TodosLoading() {
  return (
    <>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando...</p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    </>
  );
}

export { TodosLoading };
