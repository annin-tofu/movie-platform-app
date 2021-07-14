// Typically you would store in {process.env.API_KEY} for sercurity reason.
const API_KEY = "ab5bc52887f37f808d4d30b6d3d4ae06";

const requests = {
  //these are list of different requests

  //https://developers.themoviedb.org/3/trending/get-trending
  //  tap "try it out" tab. at the bottom next to pink button "SEND REQUEST", you will see and, add "&language=en-US" to get the Tranding in US English

  // test at https://api.themoviedb.org/3/trending/all/week?api_key=ab5bc52887f37f808d4d30b6d3d4ae06&language=en-US"
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
