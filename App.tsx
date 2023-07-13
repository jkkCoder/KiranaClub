import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StoreListing from './src/screens/store-listing';
import StoreDetails from './src/screens/store-details';
import {  NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './src/screens/login';
import { getUser, setUser } from './src/common/utils';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState('storeListing')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser()
      console.log('user', user)
      if(!user?.user){
        setInitialRoute('login')
      }
      setIsLoading(false)
    }
    fetchUser()
  },[])

  return (
    isLoading ? (
      <Text>Opening app...</Text>
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
      </NavigationContainer>
    )
  )
}

export default App