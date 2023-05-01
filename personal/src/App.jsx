import React from "react";
import router from "./router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  return (
    
    // <div>
    //   <NavBar/>
    //   <Home/>
    //   <About />
    //   <ProjectList />
    //   <Footer/>
    // </div>
    <RouterProvider router={router} />
  );
};

export default App;