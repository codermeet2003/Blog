import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      {/* <div class="up"></div> */}
      <div className="down">
        <div className="left">
          <ul className="List">
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
          <i className="icon fab fa-facebook-square"></i>
          <i className="icon fab fa-twitter-square"></i>
          <i className="icon fab fa-pinterest-square"></i>
          <i className="icon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
      <div className="bottom">&#169;All rights reserved.</div>
    </div>
  );
}
