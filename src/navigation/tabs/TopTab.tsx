import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name='List-1-Tab' component={React.Component} />
      <TopTab.Screen name='List-2-Tab' component={React.Component} />
      <TopTab.Screen name='List-3-Tab' component={React.Component} />
    </TopTab.Navigator>
  )
}

