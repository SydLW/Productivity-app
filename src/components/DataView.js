import React from "react";
import DataViewItem from "./DataViewItem";
import "../styling/DataView.css";

export default class DataView extends React.Component {
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

  handleDateChange = (index, newItemDate) => {
    this.props.editDate(index, newItemDate);
  };
  handleTimeChange = (index, newItemTime) => {
    this.props.editTime(index, newItemTime);
  };

  render() {
    const { entries } = this.props;
    return (
      <div className="list">
        <ul className="data">
          Entries
          {entries.map((arrayItem, index) => (
            <DataViewItem
              item={arrayItem}
              index={index}
              delete={this.props.delete}
              editing={this.state.editing}
              onDateChange={this.handleDateChange}
              onTimeChange={this.handleTimeChange}
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
