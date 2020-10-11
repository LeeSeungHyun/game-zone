import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = ({ navigation }) => (
  <Navigator
    headerMode='screen'
    screenOptions={{ 
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: '#eee',
        height: 60
      },
      headerTitleAlign: 'center',
      headerTitle: () => <Header navigation={navigation} title='About GameZone'/>
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{ title: 'About GameZone' }}
    />
  </Navigator>
);

export default AboutNavigator;

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );