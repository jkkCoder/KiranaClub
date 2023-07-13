import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDN8awnxZ4zAvle7t8rPbre5GPxjKlUAvU",
    authDomain: "jkk-kiranaclub-b9d18.firebaseapp.com",
    projectId: "jkk-kiranaclub-b9d18",
    storageBucket: "jkk-kiranaclub-b9d18.appspot.com",
    messagingSenderId: "503214870526",
    appId: "1:503214870526:web:24a7cbf1b3da6018d43aaf",
    measurementId: "G-2JC7VVHHPB"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}