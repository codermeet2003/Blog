import axios from "axios";
import { useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import {axiosInstance} from "../../config";
import "./login.css";

//Exporting the login function
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const port = process.env.PORT || 8082;

  //Handling the submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // Retrieving the information entered by the user
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // If everything goes right, the login is succeeded
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      // If any error comes, it's failed
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user)
  return (
    // Creating a login form
    <div className="login">
    <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
