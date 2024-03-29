import { TodoCounter } from './../TodoCounter/index';
import { TodoSearch } from './../TodoSearch';
import { TodoList } from './../TodoList';
import { TodoItem } from './../TodoItem';
import { CreatedTodoButton } from './../CreatedTodoButton';
import './App.css';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <>  
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Error en la carga, vuelve a intentarlo</p>}
        {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreatedTodoButton />
    </>
  );

}

export { AppUI };