import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSeaarch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreatedTodoButton } from './CreatedTodoButton';
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
