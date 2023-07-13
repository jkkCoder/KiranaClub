import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInterface } from './interface';

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