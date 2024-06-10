import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Index
 *
 * Punto de entrada de la aplicación React.
 * Renderiza el componente principal de la aplicación (App) en el elemento con el id 'root'.
 *
 * También inicia la medición del rendimiento de la aplicación si se desea.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
