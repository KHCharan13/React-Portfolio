import React from "react";
import "./ProjectMain.css";
import Edudb from "../assets/edudb.PNG";
import WeeBlog from "../assets/Weeblog.PNG";
import Mobileapp from "../assets/appimg.png";
import Ddms from "../assets/DDMS.png";
import introimg from "../assets/21.jpg";
const ProjectMain = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={introimg} alt="introimg" />
      </div>
      <div className="content">
        <h1>Project</h1>
        <p>Some of my previous works</p>
      </div>
      <div className="projects">
        <div className="tiles">
          <h3>EduDB</h3>
          <img className="images1" src={Edudb} alt="images" />
          <h5>
            A Database based Web Development Project which has a collection of
            Colleges and Universities of India, It helps the user find the
            Universities details which include details such as Cutoff, Location
            and other details. With the help of this the students can apply and
            set a goal for the colleges before hand and work towards the goal
          </h5>
          <br />
          <h5>Technologies Used :HTML, CSS MongoDB ,Node JS</h5>
        </div>
        <div className="tiles">
          <h3>WeeBlog</h3>
          <img className="images1" src={WeeBlog} alt="images" />
          <h5>
            A community Blog site where anyone can post a message like twitter
            and others can comment by using NextJS an application of React and
            FireBase for Authentication and Database service. Next JS was used
            as the framework whereas Tailwind CSS is used as the CSS framework
            for designing the website while using Firebase for Authentication as
            well as for Database
          </h5>
          <br />
          <h5>Technologies Used :React JS , Tailwind , Google FireBase</h5>
        </div>
        <div className="tiles">
          <h3>DDBMS</h3>
          <img className="images1" src={Ddms} alt="images" />
          <h5>
            Department Based Cloud Storage system that can be used to upload the
            neccessary documents in the profile. These can be accessed by
            lecturers and faculty on later stages to verify as well and confirm
            the documents to prevent any confusion and misunderstandings . Also
            it is connected to a blog to give common announcments and other
            information
          </h5>
          <br />
          <h5>Technologies Used :Next JS , Tailwind , Google FireBase</h5>
        </div>
        <div className="tiles">
          <h3>Personalised Mobile Library App</h3>
          <img className="images1" src={Mobileapp} alt="images" />
          <h5>
            An App which allows the user to know of the books wanted by the user
            are available in the library with all the details such as the no of
            copies,location and if they are not available then a soft copy link
            is available. This could help the students locate the books in the
            library faster. Also It can help students during exams when books
            are short by providing the Softcopy URL
          </h5>
          <br />
          <h5>Technologies Used :Java , FireBase</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
