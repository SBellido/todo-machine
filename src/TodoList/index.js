import './TodoList.css';

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && props.searchedTodos?.length === 0) && props.onEmptyTodos()}

      {props.searchedTodos.map(props.render)}

      <ul className="TodoList">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };