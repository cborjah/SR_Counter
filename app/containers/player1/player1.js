import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import P1Trade from './p1Trade';

class Player1 extends Component {

  handleAuthority() {
    // console.log('You pressed!');
  }

  handleTrade() {
    Actions.p1Trade();
  }

  render() {
    return (
      <View style={styles.player1}>
        <View style={styles.playerName}>
          <Text style={styles.playerNameText}>{this.props.name1}</Text>
        </View>
        <View style={styles.playerStats}>
          <View style={styles.statsLeft}>
            <TouchableHighlight
              style={styles.authority}
              onPress={() => this.handleAuthority()}
              underlayColor='#69F0AE'
              activeOpacity={0.9}>
              <Text style={styles.statsText}>{this.props.authority}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.statsRight}>
            <TouchableHighlight
              style={styles.trade}
              onPress={() => this.handleTrade()}
              underlayColor='#FFF176'
              activeOpacity={0.9}>
              <Text style={styles.statsText}>{this.props.trade}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.combat}>
              <Text style={styles.statsText}>{this.props.combat}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  player1: {
    flex: 1,
    // backgroundColor: '#E0E0E0',
  },
  playerName: {
    flex: 1,
    backgroundColor: '#9C27B0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerNameText: {
    fontSize:20,
    fontWeight: 'bold',
  },
  playerStats: {
    flex: 5,
    flexDirection: 'row',
    // backgroundColor: '#76FF03'
  },
  statsLeft: {
    flex: 1,
    // backgroundColor: '#29B6F6'
  },
  statsRight: {
    flex: 1,
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
    backgroundColor: '#00E676',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    authority: state.playerStats.p1.authority,
    trade: state.playerStats.p1.trade,
    combat: state.playerStats.p1.combat
  };
}

export default connect(mapStateToProps, null)(Player1);
