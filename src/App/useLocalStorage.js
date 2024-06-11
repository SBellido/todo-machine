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

//

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );
  const { sincronizedItem, error, loading, item } = state;

  // ACTION CREATORS
  const onError = (error) =>
    dispatch({
      type: actionTypes.error,
      payload: error,
    });

  const onSuccess = (item) =>
    dispatch({
      type: actionTypes.success,
      payload: item,
    });

  const onSave = (item) =>
    dispatch({
      type: actionTypes.save,
      payload: item,
    });

  const onSincronize = () =>
    dispatch({
      type: actionTypes.sincronize,
    });

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
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
