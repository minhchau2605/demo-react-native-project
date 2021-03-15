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
        <View style={styles.logoView}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
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
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 161,
    height: 93,
  },
});
