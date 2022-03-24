import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Welcome from "./pages/WelCome";
import Secured from "./components/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <p>
              <Link className="link" to="/">public component</Link>
            </p>
            <button className="login-button">
              <Link className="link" to="/secured">Login With KeyCloak</Link>
            </button>
          </div>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
