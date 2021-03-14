import * as React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  // logoView: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // logo: {
  //   width: 161,
  //   height: 93,
  // },
});
