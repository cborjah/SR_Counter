import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { p1Attacks } from '../actions/player1';
import { p2Attacks } from '../actions/player2';

class AttackButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p1Attacking: false,
      p2Attacing: false
    }
  }

  handleAttack() {
    // Win Condition Added
    // Needs to reset state when game ends
    if(this.props.p1) {
      if((this.props.p2Authority - this.props.combatPoints) <= 0) {
        Actions.gameSetup({ type: 'replace' });
      } else {
        this.props.p1Attacks(this.props.combatPoints);
        this.props.setPage();
      }
    } else if (this.props.p2) {
      if((this.props.p1Authority - this.props.combatPoints) <= 0) {
        Actions.gameSetup({ type: 'replace' });
      } else {
        this.props.p2Attacks(this.props.combatPoints);
        this.props.setPage();
      }
    }
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
    p1Authority: state.player1Stats.authority,
    p2Authority: state.player1Stats.authority,
  }
}

export default connect(mapStateToProps, { p1Attacks, p2Attacks })(AttackButton);
