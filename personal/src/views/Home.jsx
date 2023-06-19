import React from "react";
import { Container, Button } from 'react-bootstrap';


const Home = () => {

  return (
    <Container className="py-5" style={{
      minHeight:"100vh",
      display:"flex",
      flexDirection:"Column"
    }}>
      <h className="my-5">
        <h1>Welcome to My Portfolio!</h1>
        <p>
        Hi, my name is Hendra and I am a web developer. I have experience in building websites using React, Redux, and other front-end technologies.
        </p>
        <p>
        Ex Accountant transitioning into passionate front end developer after completing Hacktiv8 Fullstack Javascript
        </p>
        <p>This is My personal website </p>
        <p>
            Come here to see all my project.
        </p>
        <p>
          <Button variant="primary" href="/projects" style={{
          marginTop:"7vh"
        }}>View My Projects</Button>
        </p>
      </h>
    </Container>
  )
}
export default Home;