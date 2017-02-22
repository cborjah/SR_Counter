import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import P1Trade from './p1Trade';
import P1Combat from './p1Combat';

class Player1 extends Component {
  handleAuthority() {
    // Navigate to edit authority scene
  }

  render() {
    return (
      <View style={styles.player1}>
        <View style={styles.playerName}>
          <Text style={styles.playerNameText}>{this.props.name1}</Text>
        </View>
        <View style={styles.playerStats}>
          <View style={styles.statsTop}>
            <TouchableHighlight
              style={styles.authority}
              onPress={() => this.handleAuthority()}
              underlayColor='#69F0AE'
              activeOpacity={0.9}>
              <Text style={styles.statsText}>{this.props.authority}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.statsBottom}>
            <P1Trade />
            <P1Combat />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  player1: {
    flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#E0E0E0',
  },
  playerName: {
    flex: 1,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  playerNameText: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'white',
  },
  playerStats: {
    flex: 8,
    // flexDirection: 'row',
    // backgroundColor: '#76FF03'
  },
  statsTop: {
    flex: 3,
    // backgroundColor: '#29B6F6'
  },
  statsBottom: {
    flex: 2,
    // backgroundColor: '#4DB6AC',
  },
  statsText: {
    fontSize: 50,
  },
  authority: {
    flex: 1,
    backgroundColor: '#757575',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    authority: state.player1Stats.authority,
  };
}

export default connect(mapStateToProps, null)(Player1);
