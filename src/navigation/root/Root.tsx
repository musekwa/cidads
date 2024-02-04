import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator} from '../tabs/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '../../assets/colors';
import LocationsScreen from '../../screens/locations/Localations';
import ProductSearchScreen from '../../screens/product-search/ProductSearch';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ProfileScreen from '../../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TabStack"
          screenOptions={
            {
              // headerShown: false,
            }
          }>
          <Stack.Screen
            name="TabStack"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Locations"
            component={LocationsScreen}
            options={{
              headerShown: false,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: COLORS.main,
              },
            }}
          />
          <Stack.Screen
            name="ProductSearch"
            component={ProductSearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{
              title: 'Você',
              headerShown: false,
            }}
            name="Profile"
            component={ProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigation;
