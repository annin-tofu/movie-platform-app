// rfce for snippet
import React from "react";
import "./Banner.css";

function Banner() {
  // in case, "description" is way too long, it truncates
  // https://www.coderrocketfuel.com/article/truncate-a-string-at-a-given-length-using-javascript
  // Also, note that Truncates a string. Unless split is true, truncate will not split words up, and instead discard the word where the truncation occurred. This is different from Ellipsis function

  // https://stackoverflow.com/questions/4700226/i-want-to-truncate-a-text-or-line-with-ellipsis-using-javascript
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        // https://www.keicode.com/script/css-background-size.php
        // the image will expand to fully cover up whole frame
        backgroundSize: "cover",
        backgroundImage: `url("https://wallpaperaccess.com/full/173801.png")`,
        // https://www.tohoho-web.com/css/prop/background-position.htm
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          {/* PLAY BUTTON */}
          <button className="banner__button">Play</button>
          {/* MY LIST BUTTON */}
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description. This is a test description. This is a test
          description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test
          description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test
          description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test
          description. This is a test description. This is a test description.`,
            150
          )}
        </h1>
      </div>

      {/* "--" is for modifier */}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
