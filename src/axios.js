//axios is good library for making request.
// promise-based library for when making request to a server across the internet.

import axios from "axios";

//to initialize
const instance = axios.create({
  // # How to get baseURL?

  // https://developers.themoviedb.org/3/configuration/get-api-configuration
  // go to the above website and click "try it out" tab. you will see a pink button says"SEND REQUEST" and next to that, "https://api.themoviedb.org/3/configuration?api_key=<<api_key>>". Cut after /confuration?api……. then you will have the baseURL as below.

  // Probably baseURL will not need to be changed(i.e. everyone has the same URL)

  baseURL: "https://api.themoviedb.org/3",
});

// allow us to use this instance outside of this file
export default instance;
