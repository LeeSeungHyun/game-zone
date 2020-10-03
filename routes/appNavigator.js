import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ 
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: '#eee',
        height: 60
      }
    }}
  >
    <Screen 
      name="Home" 
      component={Home} 
      options={{ 
        title: 'Game Zone'
      }}
    />
    <Screen 
      name="ReviewDetails" 
      component={ReviewDetails} 
      options={{ 
        title: 'Review Details'
      }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);