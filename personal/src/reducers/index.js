const initialState = {
    projects: [
      {
        id: 1,
        title: "Pokemon Card Battle",
        description: "Pokemon card battle yang dibuat menggunakan Vue Js, di website ini kita dapat memainkan permainan yang berbasis pokemon",
        technologies: ["vuejs", "express","PokeApi","Javascript"],
        image: "./src/assets/Pokemon.jpeg",
      },
      {
        id: 2,
        title: "KomaNews",
        description: "Project news website yang dibuat menggunakan react",
        technologies: ["Node.js", "Express","React", "Redux","Javascript"],
        image: "./src/assets/Koma.jpeg",
      },
      {
        id: 3,
        title: "Ayo Invest",
        description: "website sederhana berbasis express",
        technologies: ["Javascript", "Express"],
        image: "./src/assets/ayoInvest.jpeg",
      },
      {
        id: 4,
        title: "KomaNews Admin",
        description: "sistem admin untuk komaNews yang dibuat menggunakan React",
        technologies: ["Node.js", "Express","React", "Redux","Javascript"],
        image: "./src/assets/KomaAdmin.jpeg",
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
  