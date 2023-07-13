import { Text, TextInput, Pressable, View } from 'react-native'
import React from 'react'
import PaddingView from '../../common/components/padding-view'
import styles from './styles'
import ScreenHeader from '../../common/components/screen-header'
import { useLogin } from './hooks'

const Login = () => {
  const {handleLogin, disableButton,loginData,setLoginData,showWarning} = useLogin()

  return (
    <>
      <ScreenHeader title="Login"/>
      <PaddingView customeStyles={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setLoginData(prev => ({...prev, username: text}))}
          value={loginData.username}
          autoCapitalize='none'
        />
        
        <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setLoginData(prev => ({...prev, password: text}))}
            value={loginData.password}
            autoCapitalize='none'
            secureTextEntry
        />
        {showWarning && <Text style={styles.warningText}>Invalid credentials. Please try again.</Text>}
        <Pressable disabled={disableButton} style={[styles.button, disableButton? styles.disable : {}]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </PaddingView>
    </>
  )
}

export default Login