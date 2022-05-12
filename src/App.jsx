import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import AddProject from "./AddProject.jsx";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <AddProject />
      <Signin />
      <Routes>
        <Route exact path="/addproject" element={<AddProject />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
