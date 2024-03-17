import React from "react";
import {Link} from "react-router-dom";

const Signup = () => {
    return(
        <>

        <div className="signup-container">
        <div className="signup-box">

        <div className="signup-left">
        <h2 className="signup-head">Signup</h2>
        <div className="signup-content">
            <div className="group">
        <p>Name:</p>
        <input type="text" placeholder="Your Name"></input>
        </div>
        <div className="group">
        <p>email:</p>
        <input type="text" placeholder="Your Email"></input>
        </div>
        <div className="group">
        <p>Password:</p>
        <input type="password" placeholder="Your Password"></input>
        </div>
        <button className="signup-btn" type="submit">Submit</button>
        <div className="group">
        <p>Already have an account? <Link to="/Login">Login</Link></p>
        </div>
        </div>
        </div>

        <div className="signup-right">
        <p className="right-head">Sign up !!</p>
        <p className="create-ac">Create an Account if you still don't have one</p>
        <button className="google-btn">Sign up with Google</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Signup;