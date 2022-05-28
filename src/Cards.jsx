import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Cards.css";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.imgsrc}
          className="card-img-top pt-2"
          alt={props.imgsrc}
        />
        <div className="card-body">
          <Link to={props.link}>
            <b>
              <p className="card-text">{props.title}</p>
            </b>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
