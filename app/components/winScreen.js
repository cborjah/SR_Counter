import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, StatusBar, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { newGame } from '../actions/newGame';

import Responsive from '../global_styles/responsive';

class WinScreen extends Component {
  handleNewGame() {
    this.props.newGame();
    Actions.gameSetup({ type: 'replace' });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.winner} Wins!</Text>
        </View>
        <View style={styles.buttonContainer}>
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
    justifyContent: 'space-around'
  },
  textContainer: {
    flex: 10,
    // backgroundColor: '#424242',
    // alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: Responsive.FONT_SIZE_LARGER,
    color: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    // alignItems: 'flex-start'
    // paddingTop: (Responsive.DEVICE_HEIGHT * 0.1) / 2
  },
  buttonText: {
    fontSize: Responsive.FONT_SIZE_SMALLER,
    ...Platform.select({ ios: { letterSpacing: 2.75 } }),
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: "600" // Medium
  },
  button: {
    backgroundColor: '#0091EA',
    width: Responsive.DEVICE_WIDTH / 1.19,
    height: (Responsive.DEVICE_HEIGHT * 0.2) / 3,
    borderRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(null, { newGame })(WinScreen);
