import React from "react";
import "./AboutMain.css";
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import Reactimg from "../assets/skills/react.png";
import Mongo from "../assets/skills/mongo.png";
import Tailwind from "../assets/skills/tailwind.png";
import firebase from "../assets/skills/firebase.png";
import nodejs from "../assets/skills/node.png";
import introimg from "../assets/21.jpg";
const AboutMain = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={introimg} alt="introimg" />
      </div>
      <div className="content">
        <h1>About Me.</h1>
        <p>Hello!</p>
        <br />
        <h4>
          I am Hari Charan a fullstack developer and an artist. My Aim is to
          develop user-friendly and device-optimised websites to improve user
          expirence and comfort. I have worked with various technologies and can
          adapt to new technologies easily to provide the best expirence
          possible . Some of the technologies i have worked on are given below
        </h4>
      </div>
      <div className="aboutme">
        <h1>My Skills</h1>
      </div>
      <div className="skills">
        <div className="a">
          <img className="images" src={Html} alt="HTML"></img> HTML
        </div>
        <div className="a">
          <img className="images" src={Css} alt="CSS"></img> CSS
        </div>
        <div className="a">
          <img className="images" src={Javascript} alt="Javascript"></img>
          Javascript
        </div>
        <div className="a">
          {" "}
          <img className="images" src={Reactimg} alt="React"></img>React JS
        </div>
        <div className="a">
          {" "}
          <img className="images" src={Mongo} alt="Mongo DB"></img>Mongo DB
        </div>
        <div className="a">
          {" "}
          <img className="images" src={firebase} alt="FireBase"></img>FireBase
        </div>
        <div className="a">
          {" "}
          <img className="images" src={Tailwind} alt="Tailwind CSS"></img>
          Tailwind CSS
        </div>
        <div className="a">
          {" "}
          <img className="images" src={nodejs} alt="Node JS"></img> Node JS
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
