import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  if(fontsLoaded) {
    return (
      <AppNavigator />
      // <View>
      //   <Text>223</Text>
      // </View>
      // <NavigationContainer>
      //   <Navigator>
      //     <Screen name="Home" component={Home} />
      //   </Navigator>
      // </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

