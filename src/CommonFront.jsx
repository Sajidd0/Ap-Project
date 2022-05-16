import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx"
import data from "./data.jsx"
import {web} from "../src/images/image1.jpg"
import { NavLink } from "react-router-dom";
const CommonFront = (props) => {
    return (
      <>
      <div>
           <Navbar/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center ">
           <div className="row ">
              <div className="col-12 ">
                  <h1>{props.title}</h1>

              </div>
        </div>
      </div>
     <br></br>
     <br></br>
      <div className="container-fluid mb-5">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row gy-4">
                      {/* <Cards imgsrc="../src/images/image1.jpg" title="wow"/> */}
                      {
                          props.data1.map((val,ind)=>  {
                              return <Cards key={ind} imgsrc={val.imgsrc} title={val.title}/>

                          })
                      }
        
                  </div>
              </div>
          </div>
      </div>
      
     
      </>
    );
};
export default CommonFront;