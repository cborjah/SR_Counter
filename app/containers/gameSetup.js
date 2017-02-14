import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

class GameSetup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello World!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    flex: 1,
    color: 'white',
  }
});

export default connect(null, null)(GameSetup);
