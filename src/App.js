import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //React-Router https://reactrouter.com/web/guides/quick-start 03002600
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase"; //have authentication object ready 03013100
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice"; //Redux 03014130
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser); // originally it was "null" but changed to "useSelector(selectUser)" 03014530 check "export const selectUser = (state) => state.user.user;" in useSlice.js
  //for testing 03003520
  //  const user = { name: "John Doe" };
  const dispatch = useDispatch(); //Redux 03014100

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      // whenever using useEffect, use this "clean up function" 03013330. this is becuse the "Listener" ("onAuthStateChanged") is taking up some memory. and it needs to be released and we dont want to duplicate another listener running simultaneously 0313330
      // "LISTENER": listens to the user's login state (listens to any authenticated state change. i.e. even if you are logged in and you are fresh, it will store it to your local memery. so in your browser, it pops in to the cookie so that it knows that your are logged in from before) ; have authentication object ready 03013100
      //userAuth callback
      (userAuth) => {
        if (userAuth) {
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          ); ///Redux 03014130 .. passing "action.payload" as in userSlice.js (check reducers..login)
          //LOGGED IN
          console.log(userAuth);
        } else {
          //LOGGED OUT
          dispatch(logout()); //Redux 03014130 .. This is basically resetting user back to null as coded in userSlice.js (check reducers..logout)
          //resets the "user" inside of REDUX state 03015900
        }
      }
    );

    // return () => {unsubscribe()}; // when it cleans up, go ahead and and run unsubscribe. This is basically equivalent to below
    return unsubscribe; // whenever using useEffect, use this "clean up function" 03013330. this is becuse the "Listener" ("onAuthStateChanged") is taking up some memory. and it needs to be released and we dont want duplicate another listener running simultaneously 0313330
  }, [dispatch]); // useEffect is dependant on "dispatch" method. it needs to run this and double check this code everytime you have dispatch event 03015930

  return (
    // BEM
    <div className="app">
      {/* React-Router https://reactrouter.com/web/guides/quick-start 03002600 */}
      <Router>
        {!user ? ( //if there is no user, it renders LoginScreen 03003520
          <LoginScreen />
        ) : (
          // {/* A <Switch> looks through its children <Route>s and
          //   renders the first one that matches the current URL. */}
          <Switch>
            {/* To test, use below 03003000 */}
            {/* <Route exact path="/test">
            <h1>test</h1>
          </Route> */}

            {/* ProfileScreen 03014851 */}
            {/* http://localhost:3000/profile will take you to ProfileScreen */}
            <Route path="/profile">
              <ProfileScreen />
            </Route>

            {/* difference between <Route exact path=“/” /> and <Route path=“/” />
https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
            {/* http://localhost:3000/ will take you to HomeScreen */}
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
