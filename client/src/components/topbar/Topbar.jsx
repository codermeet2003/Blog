import { useContext } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./top.css"

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar navbar-expand-lg navbar-light top">
      <div className="topLeft">
      <a className="title navbar-brand">React-App</a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> 
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="topCenter">
      <ul className="topList navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/write">WRITE</a>
            </li>
      </ul>
      </div>
      <div className="topRight">
      <ul className="topList navbar-nav me-auto">
            {user ? (
              <>
              <li class="nav-item">
              <a class="nav-link" onClick={handleLogout}>{user && "LOGOUT"}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/settings">PROFILE</a>
              </li>
            </>
        ) : (
          <>
          <li class="nav-item">
              <a class="nav-link" href="/login">LOGIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">REGISTER</a>
            </li>
            </>
        )}
            
      </ul>
      </div>
      </div>
    </div>
  );
}
