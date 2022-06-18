import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CommonFront from "./CommonFront.jsx";
import data from "./data.jsx";
import { useLocation } from "react-router-dom";
import { web } from "../src/images/image1.jpg";

import "./MasterStyles.css";
const Manager = () => {
  const state  = useLocation();
  var manager_id= state.state.temp.data1;
  return (
    <div className="overall2">
      <CommonFront
        data1={data}
        data2={manager_id}
        title="Welcome Project Manager"
        link="/projectpage"
      />
    </div>
  );
};
export default Manager;
