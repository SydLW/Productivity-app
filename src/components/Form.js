import React from "react";
import "../styling/Form.css";

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
                //change it to a date picker
                type="date"
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
                //change to numbers
                type="number"
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
