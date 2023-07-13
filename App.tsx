import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StoreListing from './src/screens/store-listing';
import StoreDetails from './src/screens/store-details';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="storeListing" component={StoreListing} />
        <Stack.Screen name="storeDetails" component={StoreDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App