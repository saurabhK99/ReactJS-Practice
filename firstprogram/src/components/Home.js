import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css"

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to Demo Website</h1>
      <h3>
        Existing User? <Link className="link" to="/login">Login Here</Link>
      </h3>
      <h3>
        New to the website? <Link className="link" to="/register">Register Here</Link>
      </h3>
    </div>
  );
};

export default Home;
