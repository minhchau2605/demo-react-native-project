import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default class ChildB extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Button color={'grey'} title="Xin chao" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
