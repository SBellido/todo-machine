import React from "react";
import { TodoIcon } from "..";

/**
 * Componente DeleteIcon
 *
 * Este componente representa un icono para eliminar un TODO.
 *
 * Props:
 * - onDelete: Función que se ejecuta al hacer clic en el icono para eliminar el TODO.
 */

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
