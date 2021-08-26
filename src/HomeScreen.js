// rfce

import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* NAV BAR */}
      <Nav />

      {/* BANNER */}
      <Banner />

      {/* ROW */}
      <Row 
      title="NEXTFIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now"
      fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"
      fetchUrl={requests.fetchTopRated}/>
 

    </div>
  );
}

export default HomeScreen;
