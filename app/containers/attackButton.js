import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { p1Attacks } from '../actions/player1';

class AttackButton extends Component {
  constructor(props) {
    super(props);
  }

  handleAttack() {
    this.props.p1Attacks(this.props.combat);
    this.props.setPage();
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() => this.handleAttack()}
        underlayColor='#F44336'
        activeOpacity={0.9}>
        <Text style={styles.text}>ATTACK</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d52122',
    // backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50
  }
});

function mapStateToProps(state) {
  return {
    combat: state.player1Stats.combat
  };
}

export default connect(mapStateToProps, { p1Attacks })(AttackButton);
