import React from "react";
import TodoListItem from "./TodoListItem";
import "../styling/TodoList.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  edit = () => {
    this.setState({ editing: true });
    console.log(this.state.editing);
  };

  save = () => {
    this.setState({ editing: false });
  };

  handleItemChange = (index, newItemString) => {
    this.props.edit(index, newItemString);
  };

  render() {
    const { entries } = this.props;
    return (
      <div className="Todolist">
        <ul className="items">
          Todo List
          {entries.map((arrayItem, index) => (
            <TodoListItem
              index={index}
              item={arrayItem}
              editing={this.state.editing}
              onDelete={this.props.delete}
              onChange={this.handleItemChange}
            />
          ))}
        </ul>
        {!this.state.editing && (
          <button onClick={() => this.edit()}>Edit</button>
        )}
        {this.state.editing && (
          <button onClick={() => this.save()}>Save</button>
        )}
      </div>
    );
  }
}
