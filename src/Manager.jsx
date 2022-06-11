import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CommonFront from "./CommonFront.jsx";
import data from "./data.jsx";
import { web } from "../src/images/image1.jpg";
import { NavLink ,useLocation} from "react-router-dom";
import "./MasterStyles.css";
const Manager = () => {
  const state  = useLocation();
  var taskAssigned_to= state.state.temp.data1;
    //console.log(Task)
    alert(taskAssigned_to)
  return (
    <div className="overall2">
      <CommonFront
        data1={data}
        title="Welcome Project Manager"
        link="/projectpage"
      />
    </div>
  );
};
export default Manager;
