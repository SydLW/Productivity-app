import React, { useState } from "react";

export default class DataView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDay: props.item.day,
      itemTime: props.item.hours,
    };
  }

  onEntryDay = (index, newDate) => {
    this.setState({
      itemDay: newDate,
    });
    this.props.onDateChange(index, newDate);
  };
  onEntryTime = (index, newTime) => {
    this.setState({ itemTime: newTime });
    this.props.onTimeChange(index, newTime);
  };

  render() {
    return (
      <li>
        {this.props.editing && (
          <div>
            <input
              type="date"
              value={this.state.itemDay}
              onChange={(e) =>
                this.onEntryDay(this.props.index, e.target.value)
              }
            ></input>
            <input
              type="number"
              value={this.state.itemTime}
              onChange={(e) =>
                this.onEntryTime(this.props.index, e.target.value)
              }
            ></input>
          </div>
        )}
        {!this.props.editing && (
          <div>
            {this.props.item.day} &nbsp;Hours:&nbsp;
            {this.props.item.hours} &nbsp;{" "}
            <button onClick={() => this.props.delete(this.props.index)}>
              Delete
            </button>
          </div>
        )}
      </li>
    );
  }
}
