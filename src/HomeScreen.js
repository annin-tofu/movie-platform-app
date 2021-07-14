// rfce

import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* NAV BAR */}
      <Nav />

      {/* BANNER */}
      <Banner />

      {/* ROW */}
    </div>
  );
}

export default HomeScreen;
