import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePicture from "../assets/profile.jpeg";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={4}>
          <Image src={profilePicture} roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h1>About Me</h1>
          <p>Hi, my name is Hendra and I am a web developer. I have experience in building websites using React, Redux, and other front-end technologies.</p>
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
                <a href="www.lindkedin.com">
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
        </Col>
      </Row>
    </Container>
  ); 
}

export default About