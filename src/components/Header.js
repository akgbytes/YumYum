import appLogo from "../../assets/app-logo.png";
import { useState } from "react";
function Header() {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={appLogo} alt="app-logo" className="app-logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="auth-btn"
            onClick={() => {
              console.log(btnText);
              setBtnText(btnText === "Login" ? "Logout" : "Login");
              console.log(btnText);
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
