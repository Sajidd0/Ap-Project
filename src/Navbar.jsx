import React from "react"
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './MasterStyles.css';
const Navbar = () => {
    return(
        <>
        <div className="container-fuild nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
    <NavLink className="navbar-brand" end to="#">Project Handler</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
      <button type="button" className="btn btn-info">Signin</button>
      <button type="button" className="btn btn-warning ms-4">Signup</button>
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>
        
        </>
    );
};
export default Navbar