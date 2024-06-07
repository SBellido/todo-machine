import "./CreatedTodoButton.css";

/**
 * Componente CreatedTodoButton
 *
 * Este componente representa un botón para crear un nuevo TODO.
 *
 * Props:
 * - setOpenModal: Función que controla la visibilidad del modal de creación de TODOs.
 *
 * Cuando se hace clic en el botón, cambia el estado de visibilidad del modal.
 */

function CreatedTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreatedTodoButton };
