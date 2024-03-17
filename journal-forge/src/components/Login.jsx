import React from "react";
import {Link} from "react-router-dom";

const Login = () =>{
    return(
        <>
    <div className="login-container">
        <div className="login-box">
            <div className="login-left">
                <img className="login-img" src="../imgs/login.jpg"/>
            </div>
            <div className="login-right">
            <div className="login-top">
                <p className="login-head">Login</p>
                <p>Welcome back!</p>
            </div>
            <div className="login-inputs">
                <div className="input1">
                <p>Email</p>
                <input type="text" placeholder="Your Email"></input>
                </div>
                <div className="input2">
                <p>Password</p>
                <input type="password" placeholder="Your Password"></input>
                </div>
            </div>
            <div className="login-bottom">
                <button className="login-btn">Login</button>
                <p>New User? <Link to ='/Signup'>Sign up</Link></p>
            </div>
            </div>

        
        </div>
        </div>
        </>
    )
}

export default Login;