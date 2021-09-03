import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  //!!! useRef !!!! // 03012500
  const emailRef = useRef(null); // useRef: is like a "big finger" is pointing at a HTML element 03012300
  const passwordRef = useRef(null);

  //AUTHENTICATION 03011700
  //   SIGN UP PART  (register)
  const register = (e) => {
    e.preventDefault(); // e.preventDefault: dont want to do typical refresh.(it, by default, refreshes... so you want to prevent that default behavior) 03011700

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value, // 03012500
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      }); // 03012500
  };

  //   SIGN IN
  const signIn = (e) => {
    e.preventDefault();
    //e.preventDefault: dont want to do typical refresh.(it, by default, refreshes... so you want to prevent that default behavior) 03011700
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef} // 03012500
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef} // 03012500
          placeholder="Password"
          type="password"
        />
        <button
          type="submit"
          onClick={signIn} //03011700
        >
          Sign In
        </button>
        <h4>
          {/* When to use span tag? 03011400 */}
          {/* this way, "New to Nextfix" is gray, but "Sign Up now" is white and highlighted */}
          <span className="signupScreen__gray">New to Nextfix?</span>
          <span
            className="signupScreen__link"
            onClick={register} //03011700
          >
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
