import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeStack } from '../stacks/HomeStack';
import { SavedStack } from '../stacks/SavedStack';
import { SellStack } from '../stacks/SellStack';
import { MessagesStack } from '../stacks/MessagesStack';
import { ProfileStack } from '../stacks/ProfileStack';
import { COLORS } from '../../assets/colors';
import ProfileScreen from '../../screens/profile/Profile';


const BottomTab = createBottomTabNavigator();




export const BottomTabNavigator = () => {
  return (
      <BottomTab.Navigator
        initialRouteName="HomeStack"
        backBehavior="history"
        screenOptions={({ route })=>({
          tabBarIcon: ({ focused, color, size })=>{
            let iconName;
           
            if(route.name === "HomeStack"){
              iconName = focused ? 'home' : 'home-outline';
            }
            else if (route.name === "SavedStack") {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }
            else if (route.name === "SellStack") {
              iconName = focused ? 'plus-box' : 'plus-box-outline';
            }
            else if (route.name === "MessagesStack") {
              iconName = focused ? 'message-text' : 'message-text-outline';
            }
            else if (route.name === "ProfileStack") {
              iconName = focused ? 'account' : 'account-outline';
            }
            else {
              iconName = "home"
            }
            return <MaterialCommunityIcons name={iconName} size={30} color={color} />
          },
          tabBarActiveTintColor: COLORS.main,
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 8,

          },
          tabBarStyle: {            
            height: 60,

            paddingTop: 8,

          }

        })}>
        <BottomTab.Screen
          options={{
            title: 'Início',
            headerShown: false,
          }}
          name="HomeStack"
          component={HomeStack}
        />
        <BottomTab.Screen
          options={{
            title: 'Guardados',
            headerShown: false,
          }}
          name="SavedStack"
          component={SavedStack}
        />
        <BottomTab.Screen
          options={{
            title: 'Anunciar',
            headerShown: false,
          }}
          name="SellStack"
          component={SellStack}
        />
        <BottomTab.Screen
          options={{
            title: 'Mensagens',
            headerShown: false,
          }}
          name="MessagesStack"
          component={MessagesStack}
        />
        <BottomTab.Screen
          options={{
            title: 'Você',
            headerShown: false,
            tabBarStyle: {
              display: 'none'
            }
          }}
          name="ProfileStack"
          component={ProfileScreen}
        />
      </BottomTab.Navigator>
  );
};
