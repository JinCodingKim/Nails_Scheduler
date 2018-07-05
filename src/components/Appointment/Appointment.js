import React, { Component } from "react";
import axios from "axios";
import "./Appointment.css";

class Appointment extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    appointmentConfirm: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { firstName, lastName, phone, service } = this.state;
    this.setState(currentState => {
      appointmentConfirm: !currentState.appointmentConfirm;
    });
    axios
      .post("/api/user/information", { firstName, lastName, phone, service })
      .then(response => console.log(response))
      .catch(() =>
        this.setState(currentState => {
          appointmentConfirm: !currentState.appointmentConfirm;
        })
      );
  };

  render() {
    return (
      <div className="appointment">
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              className="appointment-input"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              className="appointment-input"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone
            <input
              className="appointment-input"
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Service
            <input
              className="appointment-input"
              type="text"
              name="service"
              value={this.state.service}
              onChange={this.handleChange}
            />
          </label>
          <input
            disabled={this.state.appointmentConfirm}
            id="appointment-button"
            type="submit"
            value="Next Step"
          />
        </form>
      </div>
    );
  }
}
export default Appointment;
