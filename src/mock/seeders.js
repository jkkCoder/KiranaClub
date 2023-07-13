import {firebase} from "../../config.js"
import mockData from "./mock.js";

const firestore = firebase.firestore();

// add mockdata of store collection
const storesCollectionRef = firestore.collection('stores');
for (const storeId in mockData.stores) {
  storesCollectionRef.doc(storeId).set(mockData.stores[storeId]);
}

// add mockdata of user collection
const usersCollectionRef = firestore.collection('users');
for (const userId in mockData.users) {
  usersCollectionRef.doc(userId).set(mockData.users[userId]);
}