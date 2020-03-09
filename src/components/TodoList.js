// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo";

function TodoList() {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDo />
    </div>
  );
}

export default TodoList;
