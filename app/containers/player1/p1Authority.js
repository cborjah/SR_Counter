import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { addAuthorityP1, minusAuthorityP1 } from '../../actions/player1';

class P1Authority extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.authority}>
          <Text style={styles.text}>{this.props.authority}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusAuthorityP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addAuthorityP1()}>
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
    // backgroundColor: 'green'
  },
  authority: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69F0AE'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  text: {
    fontSize: 50
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
  }
});

function mapStateToProps(state) {
  return {
    authority: state.player1Stats.authority
  };
}

export default connect(mapStateToProps, { addAuthorityP1, minusAuthorityP1 })(P1Authority);
