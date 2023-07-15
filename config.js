import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import fireBaseData from "./fireBaseData";

const firebaseConfig = {
    apiKey: fireBaseData.apiKey,
    authDomain: fireBaseData.authDomain,
    projectId: fireBaseData.projectId,
    storageBucket: fireBaseData.storageBucket,
    messagingSenderId: fireBaseData.messagingSenderId,
    appId: fireBaseData.appId,
    measurementId: fireBaseData.measurementId
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}