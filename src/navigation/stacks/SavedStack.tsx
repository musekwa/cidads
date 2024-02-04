import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SavedScreen from '../../screens/saved/Saved';

const Stack = createNativeStackNavigator();


export const SavedStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Saved'
    screenOptions={{
      // headerShown: false,
    }}
    >
      <Stack.Screen name='Saved' component={SavedScreen} options={{}} />
    </Stack.Navigator>
  )
}

