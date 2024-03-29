import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Diseñar producto Digital', completed: true },
//   { text: 'Desarrollar producto Digital', completed: false},
//   { text: 'Testear producto Digital', completed: false},
//   { text: 'Vender producto Digital', completed: false}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
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
   <AppUI 
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}   
   />
  );

}

export default App;
