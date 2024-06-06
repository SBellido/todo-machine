import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="TodoList">
        {props.searchedTodos.map((todo) => props.children(todo))}
      </ul>
    </section>
  );
}

export { TodoList };
