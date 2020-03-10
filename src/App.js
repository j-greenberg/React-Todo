import React from "react";
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";
import "./components/Todo.css";

var id = 2;

const taskList = [
  {
    task: "Walk the dog",
    id: 1,
    completed: false
  },
  {
    task: "Wash the dishes",
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskList,
      name: ""
    };
  }

  toggleCompleted = clickedId => {
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (task.id === clickedId) {
          console.log("toggled", "Clicked Id: ", clickedId, "Task Id", task.id);
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          console.log(
            "NOT toggled: ",
            "Clicked Id: ",
            clickedId,
            "Task Id",
            task.id
          );
          return task;
        }
      })
    });
  };

  addTask = newTodo => {
    id++;
    console.log("New ID is: ", id);

    const newTask = {
      task: newTodo,
      id: id,
      completed: false
    };

    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
    console.log("New Task Added", newTask);
  };

  clearCompleted() {
    console.log(this.state.taskList);
    this.setState({
      taskList: this.state.taskList.filter(list => {
        return (list.completed = false);
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask} />
        <ToDoList
          taskList={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
