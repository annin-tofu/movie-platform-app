import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit"> Sign In </button>
        <h4>
          {/* When to use span tag? 03011400 */}
          {/* this way, "New to Nextfix" is gray, but "Sign Up now" is white and highlighted */}
          <span className="signupScreen__gray">New to Nextfix?</span>
          <span className="signupScreen__link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
