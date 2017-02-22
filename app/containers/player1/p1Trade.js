import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { minusTradeP1, addTradeP1 } from '../../actions/player1';

class P1Trade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusTradeP1()}>
          <Text style={styles.minus}>-</Text>
        </TouchableHighlight>
        <View style={styles.trade}>
          <Text style={styles.text}>{this.props.trade}</Text>
        </View>
        <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addTradeP1()}>
          <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFEB3B',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 30,
    paddingLeft: 30,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  trade: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
  minus: {
    fontSize: 50,
    position: 'relative',
    bottom: 3,
  },
  plus: {
    fontSize: 50,
    position: 'relative',
    bottom: 2,
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player1Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP1, addTradeP1 })(P1Trade);
