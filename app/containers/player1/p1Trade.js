import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { minusTradeP1, addTradeP1 } from '../../actions/player1';

class P1Trade extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.trade}>
          <Text style={styles.text}>{this.props.trade}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusTradeP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addTradeP1()}>
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFEB3B'
  },
  trade: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEB3B'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#757575'
  },
  text: {
    fontSize: 50
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  minus: {
    fontSize: 50,
    position: 'relative',
    bottom: 3
  },
  plus: {
    fontSize: 50,
    position: 'relative',
    bottom: 2
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player1Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP1, addTradeP1 })(P1Trade);
