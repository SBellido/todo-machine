import React from "react";

/**
 * Custom Hook useLocalStorage
 *
 * Este hook personalizado se encarga de manejar el almacenamiento y la recuperación
 * de datos en localStorage con un manejo básico de estado y errores.
 *
 * Parámetros:
 * - itemName: Nombre de la clave en localStorage donde se almacenará el ítem.
 * - initialValue: Valor inicial que se utilizará si no hay nada en localStorage.
 *
 * Estado manejado:
 * - item: Estado que contiene el valor del ítem almacenado en localStorage.
 * - loading: Estado que indica si los datos están en proceso de carga.
 * - error: Estado que indica si hubo un error al intentar cargar los datos.
 *
 * Funciones:
 * - useEffect: Se utiliza para cargar el ítem desde localStorage al montar el componente.
 * - saveItem: Función que guarda un nuevo valor en localStorage y actualiza el estado local.
 *
 * Retorna:
 * - item: El valor actual del ítem almacenado en localStorage.
 * - saveItem: Función para actualizar el ítem en localStorage.
 * - loading: Indicador de si los datos están cargando.
 * - error: Indicador de si ocurrió un error durante la carga.
 */

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Diseñar producto Digital', completed: true },
//   { text: 'Desarrollar producto Digital', completed: false},
//   { text: 'Testear producto Digital', completed: false},
//   { text: 'Vender producto Digital', completed: false}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
