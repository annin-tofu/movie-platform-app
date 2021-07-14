// rfce for snippet
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        // https://www.keicode.com/script/css-background-size.php
        // the image will expand to fully cover up whole frame
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        // https://www.tohoho-web.com/css/prop/background-position.htm
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          {/* PLAY BUTTON */}
          <button>Play</button>
          {/* MY LIST BUTTON */}
          <button>My List</button>
        </div>
        <h1 className="banner__bescription">This is a test description</h1>
      </div>

      {/* "--" is for modifier */}
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
