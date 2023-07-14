import { View, Text, Pressable,Modal, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import { CommonActions, useNavigation } from '@react-navigation/native';
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
  const [modalVisible, setModalVisible] = useState(false)
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
    // navigation.navigate('login')
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'login' }],
    }));
  }
  return (
    <View style={styles.container}>
      {hasBack && <Text style={styles.back} onPress={backHandler}>Go Back</Text>}
      <Text style={[styles.txt,  hasBack? styles.hasBack : styles.notHasBack]}>{title}</Text>
      {showLogout && (
        <Pressable onPress={() => setModalVisible(true)} style={styles.logout}>
          <Text>Log out</Text>
        </Pressable>
      )}
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          >
            <View
              style={styles.modalContent}
            >
              <Text>Are you sure you want to logout?</Text>

              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={logout}
                >
                  <Text style={styles.txt}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(false)}>
                  <Text style={[styles.txt,{textAlign:'center'}]}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
    </View>
  )
}

export default ScreenHeader