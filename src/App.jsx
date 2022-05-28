import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import AddProject from "./AddProject.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import CommonFront from "./CommonFront.jsx";
import Manager from "./Manager.jsx";
import Employee from "./Employee.jsx";
import Home from "./Home";
import ProjectPage from "./ProjectPage";
import TaskPage from "./TaskPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="commonpage" element={<CommonFront />} />
          <Route path="employee" element={<Employee />} />
          <Route path="managerfront" element={<Manager />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="projectpage" element={<ProjectPage />} />
          <Route path="taskpage" element={<TaskPage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
