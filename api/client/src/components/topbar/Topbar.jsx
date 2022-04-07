import { useContext } from "react";
import { Context } from "../../context/Context";
import "./top.css"
import { Link } from "react-router-dom";

//Exporting the TopBar function
export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog-web-g2.herokuapp.com/images/"

  //handleLogout triggers the logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (

    //A responsive navbar 
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
            <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/write">WRITE</Link>
            </li>
      </ul>
      </div>
      <div className="topRight">
      <ul className="topList navbar-nav me-auto">
        
        {/* If the user is logged in, display logout & profile button, else display login & register button */}
            {user ? (
              <>
              <li class="nav-item">
              
              <Link className="nav-link" onClick={handleLogout}>{user && "LOGOUT"}</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/settings">PROFILE</Link>
              </li>
            </>
        ) : (
          <>
          <li class="nav-item">
              <Link className="nav-link" to="/login">LOGIN</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/register">REGISTER</Link>
            </li>
            </>
        )}
            
      </ul>
      </div>
      </div>
    </div>
  );
}
