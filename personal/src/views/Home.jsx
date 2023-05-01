import React from "react";
import { Container, Button } from 'react-bootstrap';


const Home = () => {

  return (
        <div className="bg-light py-5">
    <Container className="py-5">
      <h className="my-5">
        <h1>Welcome to My Portfolio!</h1>
        <p>
        Hi, my name is Hendra and I am a web developer. I have experience in building websites using React, Redux, and other front-end technologies.
        </p>
        <p>
        Ex Accountant transitioning into passionate front end developer after completing Hacktiv8 Fullstack Javascript
        </p>
        <p>
            Come here to see all my project.
        </p>
        <p>
          <Button variant="primary" href="/projects">View My Projects</Button>
        </p>
      </h>
    </Container>
      </div>
    
  )
}
export default Home;