import * as React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function SplashScreen(navigation) {
  // setTimeout(() => {
  //   navigation.navigate('WelcomeScreen');
  // }, 3000);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.background}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 161,
    height: 93,
  },
});
