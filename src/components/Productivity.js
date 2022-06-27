import React, { useState } from "react";
import Form from "./Form";
import DataView from "./DataView";

export default class Productivity extends React.Component {
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
    let data = localStorage.getItem("productivity-form");
    if (data !== null) {
      let jsonData = JSON.parse(data);
      this.setState(jsonData);
    }
  }
  render() {
    return (
      <div>
        <Form parentCallback={this.handleCallback} />
        <DataView props={this.entries} />
      </div>
    );
  }
}
