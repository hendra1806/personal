import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css"

const ProjectList = () => {
  const projects = useSelector((state) => state.projectReducer.projects);

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <p>Technologies: {project.technologies.join(", ")}</p>
      </li>
    ))}
  </ul>
</div>
  )
}
export default ProjectList;