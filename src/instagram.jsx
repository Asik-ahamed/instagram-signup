import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./instagram.css";

function Instagram() {
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const signup = () => {

    setFormSubmitted(true); 

    if (!email || !password || !fullname || !username) {
        alert("Please fill in all the fields.");
        return;
      }


    const userdata = {
      id: users.length + 1,
      email,
      password,
      fullname,
      username,
    };

    setUsers([...users, userdata]);
    console.log("user data:", userdata);

    
    setemail("");
    setpassword("");
    setfullname("");
    setusername("");
    setFormSubmitted(false);

    alert("Signup Successful!");
    navigate("/user-table");
  };

  return (
    <div className="main">
      <div className="main1">
        <div className="main2">
          <h1>Instagram</h1>
          <p>Sign up to see photos and videos from your friends.</p>
          <Button variant="contained">Log in with Facebook</Button>

          <div className="india">
            <TextField
              id="aa"
              label="Mobile number or email address"
              variant="outlined"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              error={formSubmitted && !email}
              helperText={formSubmitted && !email ? "Email is required" : ""}
            />
            <TextField
              id="bb"
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              error={formSubmitted && !password}
              helperText={formSubmitted && !password ? "Password is required" : ""}
            />
            <TextField
              id="cc"
              label="Full Name"
              variant="outlined"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              error={formSubmitted && !fullname}
              helperText={formSubmitted && !fullname ? "Full name is required" : ""}
            />
            <TextField
              id="dd"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              error={formSubmitted && !username}
              helperText={formSubmitted && !username ? "username is required" : ""}
            />
          </div>

          <p className="apple">
            People who use our service may have uploaded your contact
            information to Instagram. <a href="#">Learn More</a>
          </p>

          <p className="mango">
            By signing up, you agree to our{" "}
            <a href="#">Terms, Privacy Policy</a> and{" "}
            <a href="#">Cookies Policy.</a>
          </p>

          <Button variant="contained" id="naruto" onClick={signup}>
            Sign Up
          </Button>
        </div>
      </div>

      <Link to="/user-table">Go to table</Link>
    </div>
  );
}

export default Instagram;
