import React from "react";

function TodoForm() {
  return (
    <div>
      <input name="task"></input>
      <button action="add">Add</button>
      <button action="clear">Clear Completed</button>
    </div>
  );
}

export default TodoForm;
