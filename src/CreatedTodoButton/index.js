import './CreatedTodoButton.css';

function CreatedTodoButton({ setOpenModal }) {
  return (
    <button 
    className="CreateTodoButton"
      onClick={() => {
        setOpenModal(state => !state);
      } 
    }
    >+</button>
  );
}

export { CreatedTodoButton };