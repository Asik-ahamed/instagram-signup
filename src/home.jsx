import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home Page</h1>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/" style={{ margin: "10px", textDecoration: "none" }}> Home</Link>
        <Link to="/login" style={{ margin: "10px", textDecoration: "none" }}> Login</Link>
        <Link to="/instagram" style={{ margin: "10px", textDecoration: "none" }}> Instagram Signup</Link>
      </nav>
    </div>
  );
}

export default Home;
