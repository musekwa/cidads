import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/Home';
import PlacesScreen from '../../screens/locations/Localations';
import {COLORS} from '../../assets/colors';
import ProductSearchScreen from '../../screens/product-search/ProductSearch';
import ProductCategoriesScreen from '../../screens/product-categories/ProductCategories';
import ProductDetailsScreen from '../../screens/product-details/ProductDetails';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductCategories"
        component={ProductCategoriesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
