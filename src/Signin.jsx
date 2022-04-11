import React from "react";

import './Signin.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {AiFillFacebook,AiFillGooglePlusSquare,AiFillTwitterSquare} from "react-icons/ai";
import {FaUser,FaKey} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Signin = () => {
    return(
        <>
        <div className="overall">
      <div className="container justify-content-center">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header justify-content-center">
                <h3>Sign In</h3>
				
				<div className="d-flex justify-content-end social_icon">
                <span><i><AiFillFacebook/></i></span>
                <span><i><AiFillGooglePlusSquare/></i></span>
                <span><i><AiFillTwitterSquare/></i></span>
				</div>
			</div>
			<div className="card-body mt-4">
				<form>
					<div className="input-group form-group my-3">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><FaUser/></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
					<div className="input-group form-group my-3">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><FaKey/></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn btn-primary login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<NavLink end to="/signup">Sign Up</NavLink>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
        </>
    );

};
    
export default Signin;
