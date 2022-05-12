import React from "react";
import "./MasterStyles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const handleChange = (event) => {};

const handleSubmit = (event) => {};

const AddProject = () => {
  return (
    <>
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
            <form>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Project Name</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" />
                </div>
              </div>

              <p></p>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Project Type</label>
                <div class="col-sm-4">
                  <button
                    class="colour btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Development
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Quality Assurance
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Testing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p></p>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Team Members:</label>
                <div className="form-group team">
                  <label class="col-form-label">Developers:</label>
                  <input class="form-control num" type="number" />
                  <p></p>
                  <label class="col-form-label">Testers:</label>
                  <input class="form-control num" type="number" />
                  <p></p>
                  <label class="col-form-label">Data Analytics:</label>
                  <input class="form-control num" type="number" />
                  <p></p>
                  <label class="col-form-label">Human Resource:</label>
                  <input class="form-control num" type="number" />
                </div>
              </div>
              <p></p>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Add Project Files</label>
                <div class="col-sm-4">
                  <input type="file" class="form-control" />
                </div>
              </div>
              <p></p>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Set Deadline</label>
                <div class="col-sm-4">
                  <input type="date" class="col-sm-2 form-control" />
                </div>
              </div>
              <div class="form">
                <button class="righted colour btn btn-primary form-control">
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
