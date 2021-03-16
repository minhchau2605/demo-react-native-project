/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppStackNavigator from './src/components/AppStackNavigator';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SplashScreen from './src/screens/SplashScreen';

const App: () => React$Node = () => {
  return <SplashScreen />;
};

export default App;
