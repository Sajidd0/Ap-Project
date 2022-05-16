import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import AddProject from "./AddProject.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import CommonFront from "./CommonFront.jsx";
import Manager from "./Manager";
import Employee from "./Employee";
import Home from "./Home";
import ProjectPage from "./ProjectPage";
import TaskPage from "./TaskPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Route  path="/commonfront" element={<CommonFront />} />
        <Route  path="/addproject" element={<AddProject />} />
        <Route  path="/signin" element={<Signin />} />
        <Route  path="/signup" element={<Signup />} />
      </BrowserRouter>
    </>
  );
};

export default App;
