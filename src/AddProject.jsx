import React, { useState } from "react";
import "./MasterStyles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const AddProject = () => {
  const [name, setname] = useState();
  const [type, settype] = useState();
  const [deadline, setdeadline] = useState();
  const [file, setfile] = useState();
  const [dev, setdev] = useState();
  const [da, setda] = useState();
  const [hr, sethr] = useState();
  const [testers, settesters] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const project = { name, type, deadline, file, dev, da, hr, testers };
    console.log(project);
    fetch("http://localhost:/8080", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      console.log("Project Added Successfully");
    });
  };

  const handleChange = (event) => {
    settype(event.target.value);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <title>Add a Project</title>

      <div className="overall">
        <div className="container justify-content-center">
          <div className="centred">
            <h1>Add a Project</h1>
          </div>
          <div className="form">
            <div class="form-group-row centred">
              <h2>Enter Project Details</h2>
            </div>
            <p></p>
            <form onSubmit={handleSubmit}>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Project Name:</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    required
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              <p></p>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Project Type:</label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    value={type}
                    onChange={handleChange}
                  >
                    <option value="Development">Development</option>
                    <option value="Testing">Testing</option>
                    <option value="QA">QA</option>
                  </select>
                </div>
              </div>

              <p></p>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Team Members:</label>
                <div className="form-group team">
                  <label class="col-form-label">Developers:</label>
                  <input
                    class="form-control num"
                    type="number"
                    required
                    onChange={(e) => setdev(e.target.value)}
                  />
                  <p></p>
                  <label class="col-form-label">Testers:</label>
                  <input
                    class="form-control num"
                    type="number"
                    required
                    onChange={(e) => settesters(e.target.value)}
                  />
                  <p></p>
                  <label class="col-form-label">Data Analytics:</label>
                  <input
                    class="form-control num"
                    type="number"
                    required
                    onChange={(e) => setda(e.target.value)}
                  />
                  <p></p>
                  <label class="col-form-label">Human Resource:</label>
                  <input
                    class="form-control num"
                    type="number"
                    required
                    onChange={(e) => sethr(e.target.value)}
                  />
                </div>
              </div>
              <p></p>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">
                  Add Project Files:
                </label>
                <div class="col-sm-4">
                  <input
                    type="file"
                    class="form-control"
                    onChange={(e) => setfile(e.target.value)}
                  />
                </div>
              </div>
              <p></p>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Set Deadline:</label>
                <div class="col-sm-4">
                  <input
                    type="date"
                    class="col-sm-2 form-control"
                    required
                    onChange={(e) => setdeadline(e.target.value)}
                  />
                </div>
              </div>
              <div class="form">
                <button
                  class="righted colour btn btn-primary form-control"
                  onClick={handleSubmit}
                >
                  Add Project
                </button>
              </div>
            </form>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
