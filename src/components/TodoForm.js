import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
    console.log(this.state.task);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="task"
            defaultValue={this.state.task}
            onChange={this.handleChanges}
          />
          <button onClick={() => this.handleSubmit()}>Add</button>
          <button action="clear">Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
