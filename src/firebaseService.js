import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

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

let instance = null
 
class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance
  }
}
 
const firebaseService = new FirebaseService().app
export default firebaseService;

    // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);