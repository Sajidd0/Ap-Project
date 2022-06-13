import React from "react";
import { useState } from "react";
import "./MasterStyles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare,
  AiFillHome,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaUser, FaKey, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Signup = () => {
  const [userName, setUsername] = useState("Username");
  const [password, setPassword] = useState("Password");
  const [cpass, setCpass] = useState("Confirm Password");
  const [address, setAddress] = useState("Address");
  const [phoneNumber, setTellno] = useState("Contact No.");
  const [email, setEmail] = useState("Email");
  const handleSubmit = (event) => {
    var data1;
    if (password !== cpass) {
      alert("Password donot match");
    }
    const personId = randomNumberInRange(1, 10000);
    const user = {
      personId,
      personId,
      userName,
      password,
      email,
      address,
      phoneNumber,
    };

    console.log(user);
    fetch("http://localhost:8080/User/saveuser", {
      method: "post",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        data1 = data;
        //alert(data1)
        if (data1 === 1) {
          alert("User Created");
        } else {
          alert("User Creation Failed");
        }
      })
      .catch((error) => {
        alert("Something went wrong, please try again later.");
      });
  };
  return (
    <div className="overall">
      <div className="container justify-content-center">
        <div className="d-flex justify-content-center h-100">
          <div className="card h-75">
            <div className="card-header justify-content-center">
              <h3>Sign Up</h3>

              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i>
                    <AiFillFacebook />
                  </i>
                </span>
                <span>
                  <i>
                    <AiFillGooglePlusSquare />
                  </i>
                </span>
                <span>
                  <i>
                    <AiFillTwitterSquare />
                  </i>
                </span>
              </div>
            </div>
            <div className="card-body mt-4">
              <form onSubmit={handleSubmit}>
                <div className="input-group form-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <FaUser />
                      </i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group form-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <MdEmail />
                      </i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group form-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <FaKey />
                      </i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group form-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <FaKey />
                      </i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => setCpass(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group form-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <AiFillHome />
                      </i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group form-group my-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i>
                        <FaPhoneAlt />
                      </i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone No."
                    onChange={(e) => setTellno(e.target.value)}
                    required
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />I agree to all terms and condtions
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary login_btn"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                have an account?<Link to="/signin">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
