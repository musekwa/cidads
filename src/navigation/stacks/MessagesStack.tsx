import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessagesScreen from '../../screens/messages/Messages';

const Stack = createNativeStackNavigator();

export const MessagesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen name="Messages" component={MessagesScreen} options={{}} />
    </Stack.Navigator>
  );
};
