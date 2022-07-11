import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemString: props.item.todo,
    };
  }

  onEntry = (index, newStringValue) => {
    this.setState({
      itemString: newStringValue,
    });
    this.props.onChange(index, newStringValue);
  };

  render() {
    return (
      <li>
        {this.props.editing && (
          <div>
            <input
              type="text"
              value={this.state.itemString}
              onChange={(e) => this.onEntry(this.props.index, e.target.value)}
            ></input>
          </div>
        )}
        {!this.props.editing && (
          <div>
            {this.props.item.todo} &nbsp;
            <button onClick={() => this.props.onDelete(this.props.index)}>
              Delete
            </button>
          </div>
        )}
      </li>
    );
  }
}
