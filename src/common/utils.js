import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StoreInterface, UserInterface } from './interface';
import {firebase} from "../../config"

const width = Dimensions.get('window').width;
const MAX_WIDTH = 320

export const scale = (size) => {
    return size * (width / MAX_WIDTH)
}

export const getUser = async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        return {
            user: user ? JSON.parse(user) : null,
        }
    } catch (e) {
        return {
            user: null
        }
    }
}; 

export const setUser = async (user) => {
    try{
        await AsyncStorage.setItem('user', JSON.stringify(user))
        return {
            success: true,
        }
    } catch(e){
        return {
            success: false,
        }
    }
}

export const fetchUserById = async (userId) => {
    try {
      const usersCollectionRef = firebase.firestore().collection("users");
      const userDoc = await usersCollectionRef.doc(userId).get();
  
      if (userDoc.exists) {
        const userData = userDoc.data();
        return { 
            isUser: true,
            payload: {
                id: userId,
                username: userData?.username,
                stores: userData?.stores
            }
         };
      } else {
        return {
            isUser: false
        }
      }
    } catch (error) {
        return {
            isUser: false
        }
    }
};

export const fetchStoresByIds = async (storeIds) => {
    try {
        const storesCollectionRef = firebase.firestore().collection("stores");
        const querySnapshot = await storesCollectionRef.where(firebase.firestore.FieldPath.documentId(), "in", storeIds).get();

        const stores = []
        querySnapshot.forEach((doc) => {
            const storeData = doc.data();
            const storeId = doc.id;
            stores.push({id: storeId, ...storeData});
        })

        return stores
    }catch(error) {
        console.log("error is ", error)
        return []
    }
}

export const makePostRequest = async (url, storeId) => {
    try {
      const storeVisit= firebase.firestore().collection("store_visits");
      const currentTime = new Date().toISOString();
  
      // Create a new document in the "posts" collection with the provided data
      await storeVisit.add({
        url: url,
        storeId: storeId,
        time: currentTime,
      });
      
      console.log("posted successful")
      return {
        success: true
      }
    } catch (error) {
      return {
        success: false
      }
    }
};