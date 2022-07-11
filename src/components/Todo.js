import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

//create a todo list for the day
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }
  handleCallback = (childData) => {
    let newEntries = [...this.state.entries, childData];
    console.log(newEntries);
    this.setState({ entries: newEntries });
  };
  componentDidMount() {
    let data = localStorage.getItem("todo-form");
    if (data !== null) {
      let jsonData = JSON.parse(data);
      this.setState(jsonData);
    }
  }
  componentDidUpdate() {
    localStorage.setItem("todo-form", JSON.stringify(this.state));
  }

  reset = () => {
    this.setState({ entries: [] });
  };

  delete = (index) => {
    console.log(index);
    this.setState((prevState) => {
      const entries = prevState.entries.slice();
      entries.splice(index, 1);
      return { entries };
    });
  };

  edit = (index, newItemString) => {
    this.setState((prevState) => {
      const entries = prevState.entries.slice();
      entries[index] = { todo: newItemString };

      return { entries };
    });
  };

  render() {
    return (
      <div className="Todo">
        <AddTodo parentCallback={this.handleCallback} />
        <div className="Productivity-button">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
        <TodoList
          edit={this.edit}
          delete={this.delete}
          entries={this.state.entries}
          //parentCallback={this.handleCallback}
        />
      </div>
    );
  }
}
