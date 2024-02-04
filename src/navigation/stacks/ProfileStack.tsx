import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/profile/Profile';

const Stack = createNativeStackNavigator();


export const ProfileStack = () => {


  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        // headerShown: false,
        
      }}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} options={{headerShown: false,}} />
    </Stack.Navigator>
  )
}

