import appLogo from "../../assets/app-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={appLogo} alt="app-logo" className="app-logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="auth-btn"
            onClick={() => {
              setBtnText(btnText === "Login" ? "Logout" : "Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
