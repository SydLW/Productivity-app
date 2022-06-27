import React, { useState } from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      day: "",
      hours: "",
    };
  }
  onChangeDay(e) {
    this.setState({
      day: e.target.value,
    });
  }
  onChangeHours(e) {
    this.setState({
      hours: e.target.value,
    });
  }

  onSubmit(e) {
    console.log(this.state);
    this.props.parentCallback(this.state);
    e.preventDefault();
    this.setState({
      day: "",
      hours: "",
    });
  }

  render() {
    return (
      <div className="form">
        <form>
          <div className="form-group">
            <label>
              <p className="title">Day of the Week</p>
              <input
                className="form-control"
                type="text"
                value={this.state.day}
                onChange={this.onChangeDay}
              ></input>
            </label>
          </div>
          <div className="form-group">
            <label>
              <p className="title">Productive hours</p>
              <input
                className="form-control"
                type="text"
                value={this.state.hours}
                onChange={this.onChangeHours}
              ></input>
            </label>
          </div>
        </form>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}
