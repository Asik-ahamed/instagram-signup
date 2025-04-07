import React from "react";
import "./login.css"
import { Link } from "react-router-dom";

function Login(){
    return(
        <div>

            <Link to="/">Click home</Link>
            <Link to="/instagram">Click Instagram</Link>

        <div className="container">
    <div class="form-box login">
        <form action="#" onsubmit="login(event)"> 
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" name="username" placeholder="username" required />
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
                <input type="password" name="password" placeholder="password" required />
                <i class='bx bxs-lock-alt' onclick="togglePassword()"></i>
            </div>
                <div class="forget-link">
                    <a href="#">forget password</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <p>or login with social platforms</p>
                <div class="social-icons">
                   <a href="#"><i class='bx bxl-google'></i></a>
                   <a href="#"><i class='bx bxl-facebook'></i></a>
                   <a href="#"><i class='bx bxl-instagram'></i></a>
                </div>
        </form>
    </div>
    </div>
    </div>
    );
}

export default Login;