import React from "react";
import introimg from "../assets/21.jpg";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={introimg} alt="introimg" />
      </div>
      Contact
      <div className="content">
        <h1>Any Questions.</h1>
        <p>Lets have a chat</p>
      </div>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message" />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
