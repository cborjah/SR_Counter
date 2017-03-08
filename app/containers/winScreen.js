import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { newGame } from '../actions/newGame';

const window = Dimensions.get('window');

class WinScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleNewGame() {
    this.props.newGame();
    Actions.gameSetup({ type: 'replace' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.winMessage}>
          <Text style={styles.text}>{this.props.winner} Wins!</Text>
        </View>
        <View style={styles.newGame}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.handleNewGame()}
            underlayColor='#40C4FF'
            activeOpacity={0.9}>
            <Text style={styles.buttonText}>NEW GAME</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  winMessage: {
    flex: 1,
    backgroundColor: '#424242',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // paddingBottom: 10
  },
  text: {
    fontSize: 50,
    color: '#FFFFFF',
  },
  newGame: {
    flex: 1,
    backgroundColor: '#424242',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: "600" // Medium
  },
  button: {
    backgroundColor: '#0091EA',
    borderRadius: 5,
    width: window.width / 2,
    elevation: 2,
    // paddingLeft: 10,
    // paddingRight: 10
  }
});

export default connect(null, { newGame })(WinScreen);
