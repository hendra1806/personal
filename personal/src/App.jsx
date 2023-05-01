import React from "react";
import About from "./views/About";
import ProjectList from "./views/ProjectList";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    
    <div>
      <NavBar/>
      <Home/>
      <About />
      <ProjectList />
      <Footer/>
    </div>
  );
};

export default App;