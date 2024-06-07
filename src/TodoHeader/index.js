import React from "react";

/**
 * Componente TodoHeader
 * Este componente recibe un conjunto de elementos hijos (children) y una prop loading.
 * Clona cada uno de los elementos hijos pasados, añadiendo la propiedad loading a cada uno de ellos.
 * Esto permite que los hijos reaccionen al estado de carga de manera uniforme.
 
  Convierte los children en un array y itera sobre cada hijo para clonarlo 
  con la nueva propiedad `loading`. Esto asegura que todos los hijos tengan 
  acceso al estado de carga.
*/

function TodoHeader({ children, loading }) {
  return (
    <header>
      {React.Children.toArray(children).map((child) => {
        React.cloneElement(children, { loading });
      })}
    </header>
  );
}

export { TodoHeader };
