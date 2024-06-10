import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

/**
 * ChangeAlert Component
 *
 * Este componente muestra una alerta cuando detecta cambios en el almacenamiento local.
 *
 * Props:
 * - show: Booleano que indica si la alerta debe mostrarse.
 * - toggleShow: Función para cambiar el estado de visibilidad de la alerta.
 *
 * Uso:
 * - Este componente se utiliza en combinación con `withStorageListener`
 *   para escuchar cambios en el almacenamiento local y mostrar una alerta.
 */

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
