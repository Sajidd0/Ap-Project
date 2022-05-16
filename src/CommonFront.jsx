import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx"
import data from "./data.jsx"
import {web} from "../src/images/image1.jpg"
import {Link } from "react-router-dom";
import "./MasterStyles.css"
import {GoPlus} from "react-icons/go"
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
                              return <Cards key={ind} imgsrc={val.imgsrc} title={val.title} link={props.link}/>

                          })
                      }
        
                  </div>
              </div>
          </div>
      </div>
      
      <Link to="/addproject" class="float">
    <i ><GoPlus className="mt-3"/></i>
    </Link>
      </>
    );
};
export default CommonFront;