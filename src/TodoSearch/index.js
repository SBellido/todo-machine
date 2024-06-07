import React from "react";
import "./TodoSearch.css";

/**
 * Componente TodoSearch
 * Este componente representa un campo de búsqueda.
 * Recibe tres props: searchValue, setSearchValue y loading.
 *
 * - searchValue: El valor actual del campo de búsqueda.
 * - setSearchValue: Función para actualizar el valor del campo de búsqueda.
 * - loading: Booleano que indica si el campo de búsqueda debe estar deshabilitado.
 *
 * El componente renderiza un input que permite al usuario buscar.
 * Cuando el valor del input cambia, se llama a la función onSearchValueChange
 * para actualizar el valor de búsqueda en el estado padre.
 */

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      placeholder="Buscar"
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
