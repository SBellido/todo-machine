import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSeaarch';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton /> */}
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Crear un Producto DIgital</p>
      <span>X</span>
    </li>
  );
}

export default App;
