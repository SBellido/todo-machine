import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "./../TodoList";
import { TodoItem } from "./../TodoItem";
import { CreatedTodoButton } from "./../CreatedTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";

/**
 * Componente principal de la aplicación Todo
 *
 * Este componente gestiona el estado de la aplicación y organiza la estructura general.
 * Utiliza el hook `useTodos` para manejar las funcionalidades principales del TODO.
 *
 * Componentes hijos y funcionalidades principales:
 *
 * - TodoHeader: Encabezado que incluye el contador y el buscador de TODOs.
 * - TodoCounter: Muestra el número de TODOs completados y el total de TODOs.
 * - TodoSearch: Campo de búsqueda para filtrar los TODOs.
 * - TodoList: Lista que muestra los TODOs filtrados, incluyendo estados de carga y error.
 * - TodoItem: Elemento individual de la lista de TODOs, permite completar y eliminar TODOs.
 * - CreatedTodoButton: Botón para abrir el modal de creación de nuevos TODOs.
 * - Modal: Modal que contiene el formulario para agregar nuevos TODOs.
 * - TodoForm: Formulario para agregar un nuevo TODO.
 * - TodosLoading, TodosError, EmptyTodos: Componentes de estado para carga, error y lista vacía.
 *
 * Estado manejado:
 *
 * - loading: Indica si los TODOs están cargando.
 * - error: Indica si hubo un error al cargar los TODOs.
 * - searchedTodos: Lista de TODOs filtrados según el criterio de búsqueda.
 * - completeTodo: Función para marcar un TODO como completado.
 * - deleteTodo: Función para eliminar un TODO.
 * - openModal: Indica si el modal de creación de TODOs está abierto.
 * - setOpenModal: Función para abrir o cerrar el modal de creación de TODOs.
 * - completedTodos: Número de TODOs completados.
 * - totalTodos: Número total de TODOs.
 * - searchValue: Valor del campo de búsqueda.
 * - setSearchValue: Función para actualizar el valor del campo de búsqueda.
 * - addTodo: Función para agregar un nuevo TODO.
 */

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      <CreatedTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
