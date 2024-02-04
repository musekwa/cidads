import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellScreen from '../../screens/sell/Sell';

const Stack = createNativeStackNavigator();


export const SellStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Sell'
    screenOptions={{
      // headerShown: false,
    }}
    >
      <Stack.Screen name='Sell' component={SellScreen} options={{}} />
    </Stack.Navigator>
  )
}
