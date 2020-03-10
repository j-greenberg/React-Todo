import React from "react";

function Todo(props) {
  return (
    <div
      onClick={() => props.toggleCompleted(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <h3>
        Task {props.task.id}: {props.task.task}
      </h3>
      {console.log(props)}
    </div>
  );
}

export default Todo;
