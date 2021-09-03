// setup firebase
import firebase from "firebase"; // !!! USE "firebase": "8.10.0" !! (note: I had to downgrade from "firebase": "9.0.1" on Sep 2,2021 , otherwise,i it will throw an error of "TypeError: Cannot read property 'initializeApp' of undefined".
// or change the syntax as shown in https://firebase.google.com/docs/web/modular-upgrade =>  (CAUTION!!) NEED TO REFACTOR ALL THE CODE BASE !!

const firebaseConfig = {
  apiKey: "AIzaSyAF1dlDj6Rf3dsRWAM4FDzFTIa4Yv_aUEo",
  authDomain: "movie-platform-app.firebaseapp.com",
  projectId: "movie-platform-app",
  storageBucket: "movie-platform-app.appspot.com",
  messagingSenderId: "304433646450",
  appId: "1:304433646450:web:e76bc25ed97e9713a02beb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }; // "explicit" export 03012200 . explicit export can have as many item as you want
export default db; // "default" export 03012200. default export can only have one item.
