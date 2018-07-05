import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";
import "./styles/css/app.css";

export default class App extends Component {
  state = {
    toggle: false
  };

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation toggle={this.toggle} handleToggle={this.handleToggle} />
        {routes}
        {/* <Footer/> */}
      </div>
    );
  }
}
