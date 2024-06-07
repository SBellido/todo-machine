import React from "react";
import { TodoIcon } from "..";

/**
 * Componente CompleteIcon
 *
 * Este componente representa un icono para marcar un TODO como completado.
 *
 * Props:
 * - completed: Indica si el TODO está completado.
 * - onComplete: Función que se ejecuta al hacer clic en el icono.
 */

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
