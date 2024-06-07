import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

/**
 * Componente Modal
 *
 * Este componente representa un modal que se superpone al contenido principal.
 *
 * Props:
 * - children: Elementos hijos que se renderizan dentro del modal.
 *
 * Utiliza ReactDOM.createPortal para renderizar el contenido del modal
 * fuera del árbol DOM principal, permitiendo que se superponga al resto del contenido.
 */

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
