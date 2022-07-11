import React from "react";
//create a todo list for the day
export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onEntry = this.onEntry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      todo: "",
    };
  }

  onEntry(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  onSubmit(e) {
    this.props.parentCallback(this.state);
    e.preventDefault();
    this.setState({
      todo: "",
    });
  }

  render() {
    return (
      <div className="AddTodo">
        <label>
          <p className="title">Todo</p>
          <input
            className="todo-control"
            type="text"
            value={this.state.todo}
            onChange={this.onEntry}
          ></input>
        </label>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}
