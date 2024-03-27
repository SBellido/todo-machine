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
  return (
    <>  
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreatedTodoButton />
    </>
  );
}

export default App;
