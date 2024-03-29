import { TodoCounter } from './../TodoCounter/index';
import { TodoSearch } from './../TodoSearch';
import { TodoList } from './../TodoList';
import { TodoItem } from './../TodoItem';
import { CreatedTodoButton } from './../CreatedTodoButton';
import './App.css';


function AppUI({
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