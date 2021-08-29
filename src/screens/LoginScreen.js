import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1626119196/Nextfix_logo_vpneqm.png"
          alt=""
        />
        <button className="loginScreen__button">Sign In</button>

        <div className="loginScreen__gradient"></div>
      </div>
    </div>
  );
}

export default LoginScreen;
