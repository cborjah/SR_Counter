import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';

class P1Trade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableHighlight style={{alignSelf: 'stretch'}}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.trade}>
          <Text style={styles.text}>{this.props.trade}</Text>
        </View>
        <View style={styles.button}>
          <TouchableHighlight>
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
    flexDirection: 'row',
    backgroundColor: '#FFEB3B',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  button: {
    flex: 3,
    backgroundColor: '#FFA000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trade: {
    flex: 2,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
  minus: {
    fontSize: 50,
    backgroundColor: 'red',
  },
  plus: {
    fontSize: 50,
    backgroundColor: 'blue',
  }
});

function mapStateToProps(state) {
  return {
    trade: state.playerStats.p1.trade
  };
}

export default connect(mapStateToProps, null)(P1Trade);
