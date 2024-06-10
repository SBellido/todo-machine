import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Custom Hook useTodos
 *
 * Este hook personalizado maneja la lógica de la aplicación de TODOs.
 * Utiliza `useLocalStorage` para persistir los TODOs en localStorage.
 *
 * Estado manejado:
 * - todos: Lista de TODOs almacenados.
 * - loading: Indicador de si los datos están cargando.
 * - error: Indicador de si ocurrió un error durante la carga.
 * - searchValue: Valor del campo de búsqueda.
 * - openModal: Estado que controla la visibilidad del modal de creación de TODOs.
 *
 * Funciones:
 * - addTodo: Añade un nuevo TODO a la lista.
 * - completeTodo: Marca un TODO como completado.
 * - deleteTodo: Elimina un TODO de la lista.
 *
 * Lógica de búsqueda:
 * - Filtra los TODOs en base al valor del campo de búsqueda.
 *
 * Retorna:
 * - loading, error, completedTodos, totalTodos, searchValue, setSearchValue,
 *   searchedTodos, addTodo, completeTodo, deleteTodo, openModal, setOpenModal
 */
function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const sincronizeTodos = () => {
    // Actualizar los TODOs desde el almacenamiento local
    const localTodos = JSON.parse(localStorage.getItem("TODOS_V1")) || [];
    saveTodos(localTodos);
  };

  return {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  };
}

export { useTodos };
