import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CommonFront from "./CommonFront.jsx";
import EmployeeData from "./EmployeeData.jsx"
import {web} from "../src/images/image1.jpg"
import { Link } from "react-router-dom";
import "./MasterStyles.css"
const Employee = () => {
    return (
        <div className="overall2">
            <CommonFront data1={EmployeeData} title="Welcome Employee" link="/taskpage"/>
        </div>

    );
};
export default Employee;