import firebase from "firebase/app";
import "firebase/auth";



 var firebaseConfig = {
    apiKey: "AIzaSyCk53C9GH0UU3z2Wnur8uEKVdiKaGPm7go",
    authDomain: "mindmetrics.firebaseapp.com",
    databaseURL: "https://mindmetrics.firebaseio.com",
    projectId: "mindmetrics",
    storageBucket: "mindmetrics.appspot.com",
    messagingSenderId: "211889867912",
    appId: "1:211889867912:web:6d50104a8145a7f32fa33d",
    measurementId: "G-Q4HCH2M962"
  };
    // Initialize Firebase
 
  const firebaseService =  firebase.initializeApp(firebaseConfig);
export default firebaseService;