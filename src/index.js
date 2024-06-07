import React from "react";
import ReactDOM from "react-dom";
// import App from "./App/index.js";
import "./index.css";

/**
 * Index
 *
 * Punto de entrada de la aplicación React.
 * Renderiza el componente principal de la aplicación (App) en el elemento con el id 'root'.
 *
 * También inicia la medición del rendimiento de la aplicación si se desea.
 */

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.nombre}!
    </h1>
  );
}

function withSaludo(saludo) {
  return function WrappedComponentWithSaludo(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

const AppWithSaludo = withSaludo("Hola")(App);

ReactDOM.render(
  <AppWithSaludo nombre="Juanita" />,
  // <App saludo="Buenas" nombre="Nath" />,
  document.getElementById("root")
);
