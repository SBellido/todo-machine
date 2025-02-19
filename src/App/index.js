import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreatedTodoButton } from "../CreatedTodoButton";
import { Modal } from "../Modal";
import { ChangeAlert } from "../ChangeAlert";
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
 * - ChangeAlertWithStorageListener: Componente para alertar cambios en el almacenamiento local.

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
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = state;

  const {
    setOpenModal,
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
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

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreatedTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
