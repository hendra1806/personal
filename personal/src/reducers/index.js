const initialState = {
    projects: [
      {
        id: 1,
        title: "Pokemon Card Battle",
        description: "This is my first project",
        technologies: ["React", "Redux"],
        image: "https://via.placeholder.com/400x300",
      },
      {
        id: 2,
        title: "KomaNews",
        description: "This is my second project",
        technologies: ["Node.js", "Express"],
        image: "https://via.placeholder.com/400x300",
      },
      {
        id: 3,
        title: "KomaNews",
        description: "This is my second project",
        technologies: ["Node.js", "Express"],
        image: "https://via.placeholder.com/400x300",
      },
      {
        id: 4,
        title: "KomaNews",
        description: "This is my second project",
        technologies: ["Node.js", "Express"],
        image: "https://via.placeholder.com/400x300",
      },
    ],
  };
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_PROJECT":
        return {
          ...state,
          projects: [...state.projects, action.payload],
        };
      case "DELETE_PROJECT":
        const newProjects = state.projects.filter(
          (project) => project.id !== action.payload
        );
        return {
          ...state,
          projects: newProjects,
        };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  