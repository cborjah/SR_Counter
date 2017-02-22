import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import P2Trade from './p2Trade';
import P2Combat from './p2Combat';

class Player2 extends Component {
  render() {
    return (
      <View style={styles.player2}>
        <View style={styles.playerName}>
          <Text style={styles.playerNameText}>{this.props.name2}</Text>
        </View>
        <View style={styles.playerStats}>
          <View style={styles.statsTop}>
            <TouchableHighlight style={styles.authority}>
              <Text style={styles.statsText}>{this.props.authority}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.statsBottom}>
            <P2Trade />
            <P2Combat />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  player2: {
    flex: 1,
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
  trade: {
    flex: 1,
    backgroundColor: '#FFEB3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  combat: {
    flex: 1,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
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
    name2: state.playerNames.name2,
    authority: state.player2Stats.authority,
    trade: state.player2Stats.trade,
    combat: state.player2Stats.combat
  };
}

export default connect(mapStateToProps, null)(Player2);
