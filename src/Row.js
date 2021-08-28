import axios from "./axios"; // make sure to import local axios 02020130
import React, { useEffect, useState } from "react";
import "./Row.css";

// function Row() {
//     return (
//         <div className="row">
//             <h2>This is a TITLE</h2>
//         </div>
//     )
// }

// deconstructure: pass in props, and becomes as below 02015828

function Row({
  title,
  fetchUrl,
  isLargeRow = false, //by default, inLargeRow is set to false
}) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/"; //02020600

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]); //[fetchUrl] : "dependancy" 02020056

  //   console.log(movies); //this will show array of 20 different movies for each of different genres 02020310

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* 02021000 */}
      <div className="row__posters">
        {movies.map(
          (
            movie //for every single "movie", return image
          ) => (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} //giving another className to make it look nice.(making size of images all same) 02020900
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} // if it is a LargeRow, then use "movie.poster_path". If not (if it is a small one, then use "movie.backdrop_path" 02020600
              alt={movie.name} // 02020720
            /> //interpolate a string for src. previously it was src="" 02020510 https://dmitripavlutin.com/string-interpolation-in-javascript/
          )
        )}
      </div>
    </div>
  );
}

export default Row;
