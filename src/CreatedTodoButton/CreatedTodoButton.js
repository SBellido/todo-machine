import './CreatedTodoButton.css';

function CreatedTodoButton() {
  return (
    <button 
    className="CreateTodoButton"
    onClick={
      (event) => {
        console.log("click")
        console.log(event.target)

      }
      
    }
    >+</button>
  );
}

export { CreatedTodoButton };