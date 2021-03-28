import React, { Component } from "react";
import "./Gist.css";
import greaterthan from "./images/greaterthan.png";

class Gist extends Component {
  render() {
    return (
      <div className="animated-page-container">
        <div className="animated-page-title-container">
          <div className="animated-page-title">
            Cross Platform for Cyber Warriors
          </div>
          <div className="animated-page-subtitle">
            Only a hacker can tell you how to hack a system, Grow your Knowledge
            on advanced Cyber threats and vulnerabilities on Kleen Security.
          </div>
        </div>
        <div className="animated-container-background">
          <div className="animated-container">
            <img className="animated-container-img" src={greaterthan} />
          </div>
        </div>
        <div className="animated-page-parts-container">
          <div className="animated-page-parts-text">
            <span className="animated-page-parts-large">01</span> Academy
          </div>
          <div className="animated-page-parts-text">
            <span className="animated-page-parts-large">02</span> Battlefields
          </div>
          <div className="animated-page-parts-text">
            <span className="animated-page-parts-large">03</span> Arena
          </div>
        </div>
      </div>
    );
  }
}

export default Gist;
