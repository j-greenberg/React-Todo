// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo";

function TodoList(props) {
  return (
    <div>
      <h1>To Do List</h1>
      <hr></hr>
      {props.taskList.map(task => (
        <ToDo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
