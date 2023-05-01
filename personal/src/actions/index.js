export const addProject = (project) => {
    return {
      type: "ADD_PROJECT",
      payload: project,
    };
  };
  
  export const deleteProject = (projectId) => {
    return {
      type: "DELETE_PROJECT",
      payload: projectId,
    };
  };
  