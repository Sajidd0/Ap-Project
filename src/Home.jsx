import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./MasterStyles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="overall3">
        <div className="animation">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="d-flex justify-content-center">
            <div className="row my-5">
              <div className="col-12">
                <h1 style={h1color}>Welcome to Project Handler</h1>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row mx-auto">
              <div className="col-12">
                <p style={pcolor}>
                  This is a place where you can handle your project at a great
                  ease.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row mx-auto">
              <div className="col-12">
                <p style={pcolor}>
                  Project Managers can have a lot of facilities of assigning the
                  projects to the employees and employees can submit their
                  project's tasks here
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="d-flex justify-content-center">
            <div className="row ">
              <div className="col-12">
                <div class="text-box">
                  <Link to="/signin" class="btn btn-white btn-animate">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
const h1color = {
  fontWeight: "bold",
};
const pcolor = {
  fontWeight: "bold",
};
