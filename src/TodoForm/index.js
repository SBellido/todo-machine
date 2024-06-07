import React from "react";
import "./TodoForm.css";

/**
 * Componente TodoForm
 * Este componente representa un formulario para agregar nuevos TODOs.
 *
 * Props:
 * - addTodo: Función que agrega un nuevo TODO a la lista.
 * - setOpenModal: Función que controla la visibilidad del modal.
 *
 * Estado:
 * - newTodoValue: Estado local que guarda el valor del nuevo TODO.
 *
 * Funcionalidad:
 * - onSubmit: Maneja el evento de envío del formulario, añade el nuevo TODO y cierra el modal.
 * - onCancel: Cierra el modal sin añadir un nuevo TODO.
 * - onChange: Actualiza el estado local con el valor del textarea.
 */

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo TODO</label>
      <textarea
        placeholder="Ej: Programar reunión"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
