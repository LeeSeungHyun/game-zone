import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = ({ navigation }) => (
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
        headerTitleAlign: 'center',
        headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
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

export default HomeNavigator;

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );