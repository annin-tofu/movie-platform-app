import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false); //useState(true/false) to show/hide a component  https://qiita.com/seira/items/f063e262b1d57d7e78b4 03005900

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1626119196/Nextfix_logo_vpneqm.png"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)} //03005900 useState(false):was originally set to false, but here changes to true
          className="loginScreen__button"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>

        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen /> //03005900 if signIn it true, then render SignupScreen
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)} //03005900 useState(false):was originally set to false, but here changes to true. and then renders SignupScreen component
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
