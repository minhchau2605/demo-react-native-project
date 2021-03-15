import * as React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={require('../assets/images/logo-b-w.png')}
          style={styles.image}
        />
        <Text style={styles.welcome}>Chào mừng</Text>
        <Text style={styles.welcome} numberOfLines={5}>bạn đến với chúng tôi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#004318',
    opacity: 0.8,
  },
  logoView: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 161,
    height: 93,
  },
  welcome: {
    fontFamily: 'Actor',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 26,
    lineHeight: 29,
    color: '#FFFFFF',
  },
});
