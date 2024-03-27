import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React
        </a>
      </header>
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
