import React from "react";
import "./AddProject.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const handleChange = (event) => {};

const handleSubmit = (event) => {};

const AddProject = () => {
  return (
    <>
      <div className="overall">
        <div className="container">
          <h1>Add a Project</h1>
          <h2>Enter Project Details</h2>
          <div className="form">
            <form>
              <div>
                <label>Project Name: </label>
                <input type="text" />
                <p></p>
                <label>Project Type: </label>
                <input type="text" />

                <p></p>
                <label>Specify Team Members: </label>
                <div className="team">
                  <label>Developers:</label>
                  <input className="num" type="number" />
                  <p></p>
                  <label>Testers:</label>
                  <input className="num" type="number" />
                  <p></p>
                  <label>Data Analytics:</label>
                  <input className="num" type="number" />
                  <p></p>
                  <label>Human Resource:</label>
                  <input className="num" type="number" />
                </div>
                <p></p>
                <label>Set Deadline: </label>
                <input type="date" />
              </div>
              <button className="submit_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;