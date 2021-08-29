import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //React-Router https://reactrouter.com/web/guides/quick-start 03002600

function App() {
  return (
    // BEM
    <div className="app">
      {/* React-Router https://reactrouter.com/web/guides/quick-start 03002600 */}
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* To test, use below 03003000*/}
          {/* <Route exact path="/test">
            <h1>test</h1>
          </Route> */}

          {/* difference between <Route exact path=“/” /> and <Route path=“/” />
https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
