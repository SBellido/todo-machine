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

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
      const handleStorageChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en TODOS_V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);

    const toggleShow = () => {
      if (props.sincronize) {
        props.sincronize();
      }
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
        {...props}
      />
    );
  };
}
export { withStorageListener };
