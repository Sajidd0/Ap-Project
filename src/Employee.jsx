import React, { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CommonFront from "./CommonFront.jsx";
import EmployeeData from "./EmployeeData.jsx";
import { web } from "../src/images/image1.jpg";
import { Link,useLocation } from "react-router-dom";
import "./MasterStyles.css";
export default function Employee () {
  
  const state  = useLocation();
  var taskAssigned_to= state.state.temp.data1;
    //console.log(Task)
    alert(taskAssigned_to)
    //alert(Task.Ttitle)
      fetch("http://localhost:8080/Tasks/getTaskByID", {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(taskAssigned_to)
      })
      .then(response => response.json())
      .then(data => {
        alert(data)
        if(data !== null)
        {
          alert("Task Not found");
        }
        else{
          alert("Data found")
        }
      })
    .catch(error => {
        alert('Something went wrong, please try again later.');
    });
 
  return (
    <div className="overall2">
      
      <CommonFront    
        data1={EmployeeData}
        title="Welcome Employee"
        link="/taskpage"  
      />
      
    </div>
    
  );


};