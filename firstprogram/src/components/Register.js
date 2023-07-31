import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Register.css";

const RegisterHandler = (user, pass, cpass) => {
  if (user !== "" && pass !== "" && pass === cpass) {
    //add the credentials to the localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem(
      "users",
      JSON.stringify([...users, { username: user, pass }])
    );

    alert("Registeration successful!");
    window.location.href = "/login";
  } else if (cpass === "") alert("Please Enter all the details!");
  else alert("Password not matched!!!");
};

const Register = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");

  return (
    <div className="registerContainer">
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
      <label htmlFor="cnfPassword">
        Re-Enter the password:
        <input
          type="password"
          name="password"
          id="cnfPassword"
          value={cpass}
          onChange={(e) => setCPass(e.target.value)}
        />
      </label>
      <button onClick={() => RegisterHandler(user, pass, cpass)}>
        Register
      </button>
      <span>
        Existing User?{" "}
        <Link className="link" to="/login">
          Login Here!
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

export default Register;
