import React from "react";
import "./header.css";
// import CTA from "./CTA";
import ME from "../../assets/Bhagesh_Photo.jpg";
import Navbar from "../Navbar/Navbar";
// import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div id="#" className="header">
    <header>
      <div className="container header_container" >
        <center>
            <h3 >Hello I'm</h3>
          <h1>Bhagesh Madavi</h1>
          {/* <div style={{margin:"auto"}}> */}
            <a href="https://github.com/DenverCoder1/readme-typing-svg">
              <img className="developerName" src="https://readme-typing-svg.herokuapp.com?&font=IBM+Plex+Sans&color=abcdei&size=25&lines=Full-Stack+Web+Developer" />
              </a>
          {/* </div> */}
          {/* <h4 className="text-light">Full-Stack Web Developer</h4> */}
          <div className="me">
            <img src={ME} alt="Me" />
          </div>
        </center>
        {/* <CTA /> */}
        <div className="top-portion">
          <div>
          {/* <p>
            <a href="https://github.com/DenverCoder1/readme-typing-svg"><img style={{width:"500px"}} src="https://readme-typing-svg.herokuapp.com?&font=IBM+Plex+Sans&color=abcdei&size=25&lines=I'm+a+Full-Stack+Web+Developer;" /></a>
          </p> */}
          </div>
          <div className="about">
            <p>I am a  Full-Stack Web Developer with a hands-on  Javascript.</p>
            <p>Analysis | development | Implementation of responsive web interfaces using javascript react.js.</p>

          </div>
          <div className="cta">
            <a
              href="https://drive.google.com/file/d/1-xMqGtGm2SRZ8ccZ8wPwDClQj-P97crX/view?usp=sharing"
              target="_blank"
              className="btn"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
        {/* <HeaderSocial /> */}
        

        {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
      </div>
    </header>
    <div className="navbar-external"><Navbar/></div>
    

    </div>
  );
};

export default Header