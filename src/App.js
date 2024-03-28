import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSeaarch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreatedTodoButton } from './CreatedTodoButton/CreatedTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Diseñar producto Digital', completed: true },
  { text: 'Desarrollar producto Digital', completed: false},
  { text: 'Testear producto Digital', completed: false},
  { text: 'Vender producto Digital', completed: false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = defaultTodos.length;

  const searchedTodos = todos.filter(
    (todo) => { 
      const todosText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todosText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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

export default App;
