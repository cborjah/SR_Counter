import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { minusCombatP2, addCombatP2 } from '../../actions/player2';

class P2Combat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.combat}>
          <Text style={styles.text}>{this.props.combat}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusCombatP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addCombatP2()}>
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
  },
  combat: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#757575'
  },
  text: {
    fontSize: 50,
  },
  button: {
    flex: 1,
    alignItems: 'center',
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
    combat: state.player2Stats.combat
  }
}

export default connect(mapStateToProps, { minusCombatP2, addCombatP2 })(P2Combat);
