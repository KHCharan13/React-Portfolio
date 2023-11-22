import React from "react";
import "./Main.css";
import introimg from "../assets/12-min.jpg";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={introimg} alt="introimg" />
      </div>
      <div className="content">
        <h2>Hi I'm</h2>
        <h1>HARI CHARAN</h1>
        <p>Full Stack Developer</p>
        <div className="buttonc">
          <Link className="btn" to="/project">
            Projects
          </Link>
          <Link className="btn-light" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
