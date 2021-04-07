import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class ChildA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <Text>Click Me !</Text>
        </TouchableOpacity>
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
