import React from "react";

import './MasterStyles.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {AiFillFacebook,AiFillGooglePlusSquare,AiFillTwitterSquare,AiFillHome} from "react-icons/ai";
import {MdEmail} from "react-icons/md"
import {FaUser,FaKey,FaPhoneAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
const Signup = () => {
    return(
        <>
        <div className="overall">
      <div className="container justify-content-center">
	<div className="d-flex justify-content-center h-100">
		<div className="card h-75">
			<div className="card-header justify-content-center">
                <h3>Sign Up</h3>
				
				<div className="d-flex justify-content-end social_icon">
                <span><i><AiFillFacebook/></i></span>
                <span><i><AiFillGooglePlusSquare/></i></span>
                <span><i><AiFillTwitterSquare/></i></span>
				</div>
			</div>
			<div className="card-body mt-4">
				<form>
					<div className="input-group form-group my-4">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><FaUser/></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
                    <div className="input-group form-group my-4">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><MdEmail/></i></span>
						</div>
						<input type="text" className="form-control" placeholder="Email"/>
						
					</div>
					<div className="input-group form-group my-4">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><FaKey/></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
                    <div className="input-group form-group my-4">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><FaKey/></i></span>
						</div>
						<input type="password" className="form-control" placeholder=" Confirm password"/>
					</div>
                    <div className="input-group form-group my-4">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><AiFillHome/></i></span>
						</div>
						<input type="text" className="form-control" placeholder="Address"/>
						
					</div>
                    <div className="input-group form-group my-4">
						<div className="input-group-prepend">
							<span className="input-group-text"><i><FaPhoneAlt/></i></span>
						</div>
						<input type="text" className="form-control" placeholder="Phone No"/>
						
					</div>
                    <div className="row align-items-center remember">
						<input type="checkbox"/>I agree to all terms and condtions
					</div>
					<div className="form-group">
						<input type="submit" value="Sign Up" className="btn btn-primary login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					have an account?<Link  to="/signin">Sign In</Link>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
        </>
    );

};
    
export default Signup;
