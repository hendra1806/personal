import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css"
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const projects = useSelector((state) => state.projectReducer.projects);

  return (
    <div style={{
      backgroundImage: "url('/background3.jpg')",
      backgroundSize: 'fit',
      backgroundPosition: 'center',
      width:"100%"
    }}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{width:"98%", marginBottom:"8vh"}}>
            <Link to={`${project.link}`} style={{ color: "inherit", textDecoration: "none" }}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(", ")}</p>
            </Link>
          </li>
    ))}
  </ul>
</div>
  )
}
export default ProjectList;