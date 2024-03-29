import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('Log 1');
  console.log('Log 2');
  console.log('Log 3');

  const searchedTodos = todos.filter(
    (todo) => { 
      const todosText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todosText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );
    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  };

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  return ( 
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo
    }}>
      {children}
    </TodoContext.Provider>

  );
}

export { TodoContext, TodoProvider };