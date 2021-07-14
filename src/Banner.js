// rfce for snippet
import React, { useEffect, useState } from "react";
import "./Banner.css";
// Do not import local axios, not global.
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  // https://qiita.com/seira/items/f063e262b1d57d7e78b4
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    //FETCH DATA, responsible for fetching a movie that shows in the BANNER
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          //pick a random number. generate a random number which is from 0 all the way to the length of results. and sets the movie to the movie(matching the random number)
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      //after a request, it is always good to put such as next line in order to completely close promise chain. https://javascript.info/promise-chaining
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

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
        // TMDb has a default starter, which is "https://image.tmdb.org/t/p/original/", for getting a picture from their website.
        // and use string interpretation "/${movie?.backdrop_path}". and append it. https://developers.themoviedb.org/3/getting-started/images   https://yunogotoshi.blogspot.com/2014/11/tmdb-api-tvjson.html
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
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
