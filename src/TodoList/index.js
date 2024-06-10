import "./TodoList.css";

/**
 * Componente TodoList
 *
 * Este componente representa una lista de TODOs.
 *
 * Props:
 * - error: Indica si ha ocurrido un error al cargar los TODOs.
 * - onError: Función que se ejecuta para mostrar un mensaje de error.
 * - loading: Indica si los datos están en proceso de carga.
 * - onLoading: Función que se ejecuta para mostrar un indicador de carga.
 * - totalTodos: Número total de TODOs.
 * - onEmptyTodos: Función que se ejecuta cuando no hay ningún TODO.
 * - searchedTodos: TODOs filtrados según el criterio de búsqueda.
 * - searchText: Texto utilizado para la búsqueda.
 * - onEmptySearchResults: Función que se ejecuta cuando no se encuentran resultados de búsqueda.
 * - children: Función que renderiza los elementos individuales de la lista de TODOs.
 */

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="TodoList">
        {!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
