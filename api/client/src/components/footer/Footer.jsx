import { Link } from "react-router-dom";
import "./footer.css";

//Exporting the Footer function
export default function Footer() {
  return (
    <div className="Footer">
      <div className="down">
        <div className="left">
          <ul className="List">
            {/* Footer List */}
            {/* On clicking it redirects to the respective pages  */}
            <li className="ListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="ListItem">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="ListItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
        <span className="social">FOLLOW US</span>
        <div className="icons">

          {/* Used the font awesome icons */}

          {/* Facebook Icon */}
          <a href="https://www.facebook.com/" className="icon-color"><i className="icon fab fa-facebook-square"></i></a>
          {/* Twitter Icon */}
          <a href="https://twitter.com/login" className="icon-color"><i className="icon fab fa-twitter-square"></i></a>
          {/* Pinterest Icon */}
          <a href="https://in.pinterest.com/" className="icon-color"><i className="icon fab fa-pinterest-square"></i></a>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/" className="icon-color"><i className="icon fab fa-instagram-square"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright  */}
      <div className="bottom">&#169;All rights reserved.</div>
    </div>
  );
}
