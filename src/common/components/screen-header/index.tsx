import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from "react-redux"
import { setUser } from '../../utils';
import { addUser } from '../../../redux/userSlice';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    hasBack? : boolean;
    title : string;
    showLogout? :boolean
}

const ScreenHeader = ({hasBack = false, title, showLogout=false}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch()
  const backHandler = () => {
    navigation.goBack()
  }
  const logout = async () => {
    await setUser(null)
    dispatch(addUser({
      id: null,
      username: null,
      stores: null
    }))
    navigation.navigate('login')
  }
  return (
    <View style={styles.container}>
      {hasBack && <Text style={styles.back} onPress={backHandler}>Go Back</Text>}
      <Text style={[styles.txt,  hasBack? styles.hasBack : styles.notHasBack]}>{title}</Text>
      {showLogout && (
        <Pressable onPress={logout} style={styles.logout}>
          <Text>Log out</Text>
        </Pressable>
      )}
    </View>
  )
}

export default ScreenHeader