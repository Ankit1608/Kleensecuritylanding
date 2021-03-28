import React, { Component } from "react";

import "./Home.css";
import mainlogo from "./images/mainlogo.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-section" id="home">
        <img alt="mainbg" src={mainlogo} className="logo-home" />
      </div>
    );
  }
}
export default Home;
