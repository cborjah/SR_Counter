import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { newGame } from '../actions/newGame';

import Responsive from '../global_styles/responsive';

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
        <StatusBar hidden />
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
    backgroundColor: '#070d18',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  winMessage: {
    flex: 1,
    // backgroundColor: '#424242',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // paddingBottom: 10
  },
  text: {
    fontSize: Responsive.FONT_SIZE_LARGER,
    color: '#FFFFFF',
  },
  newGame: {
    flex: 1,
    paddingTop: (Responsive.DEVICE_HEIGHT * 0.1) / 2,
    // backgroundColor: '#424242',
  },
  buttonText: {
    fontSize: Responsive.FONT_SIZE_TITLE,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: "600" // Medium
  },
  button: {
    backgroundColor: '#0091EA',
    // borderWidth: 1,
    width: Responsive.DEVICE_WIDTH * 0.8,
    height: (Responsive.DEVICE_HEIGHT * 0.2) / 3,
    borderRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center'
    // paddingLeft: 10,
    // paddingRight: 10
  }
});

export default connect(null, { newGame })(WinScreen);
