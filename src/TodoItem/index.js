import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

/**
 * Componente TodoItem
 *
 * Este componente representa un elemento de la lista de TODOs.
 *
 * Props:
 * - text: Texto del TODO.
 * - completed: Indica si el TODO está completado.
 * - onComplete: Función que se ejecuta al completar el TODO.
 * - onDelete: Función que se ejecuta al eliminar el TODO.
 */

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

      <p
        className={`TodoItem-p 
        ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>

      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
