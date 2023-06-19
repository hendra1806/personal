import React from "react";
import router from "./router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  return (
    <div style={{
      backgroundImage: "url('/background3.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width:"100% !important",
    }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;