import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  render() {
    return (
      <div>
        <input type="password" value={this.state.password} />
      </div>
    );
  }
}
