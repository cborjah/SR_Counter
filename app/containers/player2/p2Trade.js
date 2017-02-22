import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { minusTradeP2, addTradeP2 } from '../../actions/player2';

class P2Trade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusTradeP2()}>
          <Text style={styles.minus}>-</Text>
        </TouchableHighlight>
        <View style={styles.trade}>
          <Text style={styles.text}>{this.props.trade}</Text>
        </View>
        <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addTradeP2()}>
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
    trade: state.player2Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP2, addTradeP2 })(P2Trade);
