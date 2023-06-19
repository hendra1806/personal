import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePicture from "../assets/profile.jpeg";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub,FaFilePdf } from "react-icons/fa";

function About() {
  return (
    <Container className="my-5" style={{
      minHeight:"40vh"
    }}>
      <Row className="align-items-center">
        <Col md={4}>
          <Image src={profilePicture} roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h1>About Me</h1>
          <p>Hi, my name is Hendra and I am a web developer.I am 24 years old and live in Bekasi Jawabarat. I have experience in building websites using React, Redux, and other front-end technologies.</p>
          <p>Ex Accountant transitioning into passionate front end developer after completing Hacktiv8 Fullstack Javascript</p>
          <p>You can Found me on</p>
          <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="www.facebook.com">
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="www.twitter.com">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/hendra-465a22274/">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/hendra1806"
                
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              </ul>
            <p>Or you can see my resume at</p>
            <a
                  href="/CV Hendra.pdf"
                
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf size={35} />
            </a>
        </Col>
      </Row>
    </Container>
  ); 
}

export default About