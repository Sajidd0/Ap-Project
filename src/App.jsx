import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import { Routes, Route } from "react-router-dom"
const App = () => {
    return(
        <>
		<Signup/>
		<Routes>
			<Route exact path="/signin" element={<Signin/>}/>
			<Route exact path="/signup" element={<Signup/>}/>
		</Routes>
        </>
    );

};
    
export default App;
