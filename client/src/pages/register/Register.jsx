import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

//Exporting the function Register
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Creating a data object
  const data = {
    username,
    email,
    password,
  };

  // On clicking the register button, if everything goes right, redirect to the login page else show error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('http://localhost:8082/api/auth/register', data) 
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  //Creating a register form
  return (
    <div className="register">
    <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>      
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
