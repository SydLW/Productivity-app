import React, { useState } from "react";
import Form from "./Form";
import DataView from "./DataView";
import LineGraph from "./LineGraph";
import "../styling/Productivity.css";

export default class Productivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      show: false,
    };
  }
  handleCallback = (childData) => {
    let newEntries = [...this.state.entries, childData];
    console.log(newEntries);
    this.setState({ entries: newEntries });
  };

  componentDidMount() {
    let data = localStorage.getItem("productivity-form");
    if (data !== null) {
      let jsonData = JSON.parse(data);
      this.setState(jsonData);
    }
  }
  componentDidUpdate() {
    localStorage.setItem("productivity-form", JSON.stringify(this.state));
  }

  reset = () => {
    this.setState({ entries: [] });
  };

  view = () => {
    this.setState({ show: !this.state.show });
  };

  delete = (index) => {
    console.log(index);
    this.setState((prevState) => {
      const entries = prevState.entries.slice();
      entries.splice(index, 1);
      return { entries };
    });
  };

  editDate = (index, newDate) => {
    this.setState((prevState) => {
      const entries = prevState.entries.slice();
      entries[index].day = newDate;
      return { entries };
    });
  };

  editTime = (index, newTime) => {
    this.setState((prevState) => {
      const entries = prevState.entries.slice();
      entries[index].hours = newTime;
      return { entries };
    });
  };

  render() {
    return (
      <div className="Productivity">
        <Form parentCallback={this.handleCallback} />
        <div className="Productivity-button">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
          <button className="view" onClick={this.view}>
            View Data
          </button>{" "}
          {this.state.show && (
            <div>
              <DataView
                entries={this.state.entries}
                delete={this.delete}
                editDate={this.editDate}
                editTime={this.editTime}
              />{" "}
            </div>
          )}
        </div>
        <LineGraph entries={this.state.entries} />
      </div>
    );
  }
}
