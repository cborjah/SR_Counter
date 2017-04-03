import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { addDefenseP2, minusDefenseP2 } from '../../actions/player2';

class P2Bases extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.outpostValue}>
          <Text style={styles.text}>{this.props.defense}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusDefenseP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addDefenseP2()}>
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outpost: {
    flex: 1,
    backgroundColor: 'purple'
  },
  base: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  button: {
    flex: 1,
    alignItems: 'center'
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
  },
  outpostValue: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 35
  }
});

function mapStateToProps(state) {
  return {
    defense: state.player2Stats.defense
  };
}

export default connect(mapStateToProps, { addDefenseP2, minusDefenseP2 })(P2Bases);
