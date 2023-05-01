import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePicture from "../assets/profile.jpeg";

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
        </Col>
      </Row>
    </Container>
  ); 
}

export default About