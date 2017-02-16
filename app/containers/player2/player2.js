import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Player2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authority: 50,
      trade: 0,
      combat: 0
    }
  }

  render() {
    return (
      <View style={styles.player2}>
        <View style={styles.playerName}>
          <Text style={styles.playerNameText}>{this.props.name2}</Text>
        </View>
        <View style={styles.playerStats}>
          <View style={styles.statsLeft}>
            <TouchableHighlight style={styles.authority}>
              <Text style={styles.statsText}>{this.state.authority}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.statsRight}>
            <TouchableHighlight style={styles.trade}>
              <Text style={styles.statsText}>{this.state.trade}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.combat}>
              <Text style={styles.statsText}>{this.state.combat}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  player2: {
    flex: 1,
    backgroundColor: '#E0E0E0',
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
    backgroundColor: '#76FF03'
  },
  statsLeft: {
    flex: 1,
    backgroundColor: '#29B6F6'
  },
  statsRight: {
    flex: 1,
    backgroundColor: '#4DB6AC',
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

function MapStateToProps(state) {
  return {
    name2: state.playerNames.name2
  }
}

export default connect(MapStateToProps, null)(Player2)
