import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Sidebar from "./screens/Sidebar";
import Profile from "./screens/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "profile",
    element: <Profile />,
    
  },
  
]);
const App = () => {
  return <div>
    <RouterProvider router={router}/>
  </div>;
};

export default App;
