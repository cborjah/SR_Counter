import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const WinScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.winMessage}>
        <Text style={styles.text}>{props.winner} Wins!</Text>
      </View>
      <View style={styles.newGame}>
        <TouchableHighlight>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  winMessage: {
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  text: {
    fontSize: 50
  },
  newGame: {
    flex: 1,
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  buttonText: {
    fontSize: 30
  }
});

export default WinScreen;
