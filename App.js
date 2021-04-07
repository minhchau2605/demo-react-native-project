import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SplashScreen from './src/screens/SplashScreen.js';
import WelcomeScreen from './src/screens/WelcomeScreen.js';
import ChildA from './src/components/childA.js';
import ChildB from './src/components/childB.js';
import {View, StatusBar} from 'react-native';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {check: true};
  }

  onPressButton() {
    this.setState({check: !this.state.check});
  }
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <StatusBar translucent backgroundColor="transparent" />
        <ChildA onPress={() => this.onPressButton()} />
        {!this.state.check && <ChildB />}
      </View>
    );
  }
}

export default App;
