import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5g0LATSSdYXKWrd9UFSZYpKqQPtXaC7k",
  authDomain: "catch-of-the-day-tim-johnson.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tim-johnson.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export{firebase};

// This is a default export
export default base;

