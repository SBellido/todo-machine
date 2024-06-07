import React from "react";

/**
 * Componente TodoClick
 *
 * Este componente muestra un contador de la cantidad de clicks en un botón.
 *
 * Utiliza el hook useState para manejar el estado del contador.
 */

function TodoClick() {
  let [state, setState] = React.useState(0);

  return (
    <>
      <p>Diste click {state} veces</p>
      <button
        onClick={() => {
          setState(state++);
        }}
      >
        Click
      </button>
    </>
  );
}
