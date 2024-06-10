import React from "react";

/**
 * withStorageListener Higher-Order Component (HOC)
 *
 * Este HOC escucha los cambios en el almacenamiento local y pasa esta información
 * al componente envuelto (`WrappedComponent`).
 *
 * Props:
 * - WrappedComponent: El componente que será envuelto y recibirá las props adicionales.
 *
 * Estado:
 * - storageChange: Booleano que indica si ha habido un cambio en el almacenamiento local.
 *
 * Uso:
 * - Este HOC se utiliza para envolver un componente que necesita reaccionar a cambios
 *   en el almacenamiento local, pasándole las props `show` y `toggleShow`.
 */

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo cambios en TODOS_V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow };
}

export { useStorageListener };
