import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StoreListing from './src/screens/store-listing';
import StoreDetails from './src/screens/store-details';
import {  NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './src/screens/login';
import { Text } from 'react-native';
import useApp from './hooks';
import Toast from 'react-native-toast-message'
import LotteView from "lottie-react-native"

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState('storeListing')
  const [isLoading, setIsLoading] = useState(true)
  useApp(setInitialRoute, setIsLoading)

  return (
    isLoading ? (
      <LotteView style={{flex:1, height:"100%",alignSelf:'center'}} source={require("./assets/kirana-splash.json")} autoPlay />
    ) : (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}  screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="storeListing" component={StoreListing} />
          <Stack.Screen name="storeDetails" component={StoreDetails} />
          {/* auth routes */}
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    )
  )
}

export default App