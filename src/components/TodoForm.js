import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChanges = e => {
    this.setState({
      search: e.target.value
    });
    console.log(this.state.search);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.search);
    this.setState({
      search: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            value={this.state.search}
            onChange={this.handleChanges}
          />
          <button>Add To Do</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
