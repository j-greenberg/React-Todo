import React from "react";
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: "",
      id: "",
      completed: ""
    };
  }

  addTask = newTodo => {
    const newTask = {
      task: newTodo,
      id: new Date(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
    console.log("New Task Added", newTask);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask} />
        <ToDoList task={this.state.task} addTask={this.addTask()} />
      </div>
    );
  }
}

export default App;
