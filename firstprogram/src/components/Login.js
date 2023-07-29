import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

const loginHandler = (user, pass) => {
  if (user === "mayank" && pass === "1234") {
    alert("Login successful!");
    window.location.href = "/";
  } else alert("Wrong Credentials");
};

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="loginContainer">
      <label htmlFor="username">
        Enter the username:
        <input
          type="text"
          name="username"
          id="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Enter the password:
        <input
          type="password"
          name="password"
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <button onClick={() => loginHandler(user, pass)}>Login</button>
      <span>
        New User?{" "}
        <Link className="link" to="/register">
          Register Here!
        </Link>
      </span>

      <span>
        Goto HomePage!{" "}
        <Link className="link" to="/">
          HOME
        </Link>
      </span>
    </div>
  );
};

export default Login;
