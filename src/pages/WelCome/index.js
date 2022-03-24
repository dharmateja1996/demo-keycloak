import React, { Component } from "react";
import Login from "../../components/Login";
import { Link } from "react-router-dom";

import "./index.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome-container">
        <p>This is your public-facing component.</p>
      </div>
    );
  }
}
export default Welcome;
