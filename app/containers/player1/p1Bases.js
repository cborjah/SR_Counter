import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { addDefenseP1, minusDefenseP1 } from '../../actions/player1';

class P1Bases extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* <View style={styles.outpost}> */}
          <View style={styles.outpostValue}>
            <Text style={styles.text}>{this.props.defense}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusDefenseP1()}>
              <Text style={styles.minus}>-</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addDefenseP1()}>
              <Text style={styles.plus}>+</Text>
            </TouchableHighlight>
          </View>
        {/* </View> */}

        {/* <View style={styles.base}>
          <View style={styles.outpostValue}>
            <Text style={styles.text}>0</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusAuthorityP1()}>
              <Text style={styles.minus}>-</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addAuthorityP1()}>
              <Text style={styles.plus}>+</Text>
            </TouchableHighlight>
          </View>
        </View> */}

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
    defense: state.player1Stats.defense
  };
}

export default connect(mapStateToProps, { addDefenseP1, minusDefenseP1 })(P1Bases);
