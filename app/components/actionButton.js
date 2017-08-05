import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Platform }
    from 'react-native';
import { Actions } from 'react-native-router-flux';
import { p1Attacks } from '../actions/player1';
import { p2Attacks } from '../actions/player2';

import Responsive from '../global_styles/responsive';

class ActionButton extends Component {
  handleAttack() {
    let { p1, p2, p1Attacks, p2Attacks, combatPoints, setPage } = this.props;

    if ( p1 ) {
      p1Attacks(combatPoints);
      setPage();
    } else if ( p2 ) {
      p2Attacks(combatPoints);
      setPage();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleAttack()}
          underlayColor="#E57373"
          activeOpacity={0.9}
        >
          <Text style={styles.text}>
            {this.props.combatPoints ? 'ATTACK' : 'END TURN'}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: Responsive.FONT_SIZE_SMALLER,
        ...Platform.select({ ios: { letterSpacing: 2.75 } }),
    fontWeight: '600',
    color: 'white'
  },
  button: {
    backgroundColor: '#d34414',
    width: Responsive.DEVICE_WIDTH / 1.19,
    height: (Responsive.DEVICE_HEIGHT * 0.2) / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    elevation: 10
  }
});

function mapStateToProps(state) {
  return {
    p1Authority: state.player1Stats.authority,
    p2Authority: state.player2Stats.authority
  }
}

export default connect(mapStateToProps, { p1Attacks, p2Attacks })(ActionButton);
