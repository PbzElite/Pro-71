import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyALNIavZX9Pqd8LGKtvewLL86TyfgwPSGg",
    authDomain: "pro-71-287f9.firebaseapp.com",
    projectId: "pro-71-287f9",
    storageBucket: "pro-71-287f9.appspot.com",
    messagingSenderId: "1071366157407",
    appId: "1:1071366157407:web:153d43168387ad32b8d7ea"
  };

  if(!firebaseConfig.length){
    firebase.initializeApp();
  }

export default firebase.firestore();
