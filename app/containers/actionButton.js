import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { p1Attacks } from '../actions/player1';
import { p2Attacks } from '../actions/player2';

import Responsive from '../global_styles/responsive';

class ActionButton extends Component {
  constructor(props) {
    super(props);
  }

  handleAttack() {
    if(this.props.p1) {
      this.props.p1Attacks(this.props.combatPoints);
      this.props.setPage();
    } else if (this.props.p2) {
      this.props.p2Attacks(this.props.combatPoints);
      this.props.setPage();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleAttack()}
          underlayColor='#E57373'
          activeOpacity={0.9}
        >
          <Text style={styles.text}>{this.props.combatPoints ? "ATTACK" : "END TURN"}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey'
  },
  text: {
    fontSize: Responsive.FONT_SIZE_SMALLER,
    ...Platform.select({ ios: { letterSpacing: 2.75 } }),
    // fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'white'
  },
  button: {
    backgroundColor: '#d34414',
    width: Responsive.DEVICE_WIDTH / 1.19,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    elevation: 10,
    // paddingTop: 9,
    // paddingBottom: 9,
    height: (Responsive.DEVICE_HEIGHT * 0.2) / 3
  }
});

function mapStateToProps(state) {
  return {
    p1Authority: state.player1Stats.authority,
    p2Authority: state.player2Stats.authority
  }
}

export default connect(mapStateToProps, { p1Attacks, p2Attacks })(ActionButton);
