import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInterface } from './interface';
import {firebase} from "../../config"

const width = Dimensions.get('window').width;
const MAX_WIDTH = 320

export const scale = (size:number) => {
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

export const setUser = async (user: UserInterface | null) => {
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

export const fetchUserById = async (userId:string) => {
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