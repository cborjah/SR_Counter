import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.player1}>
          <View style={styles.playerName}>
            <Text style={styles.playerNameText}>{this.props.name1}</Text>
          </View>
          <View style={styles.playerStats}>
            <View style={styles.statsLeft}>

            </View>
            <View style={styles.statsRight}>

            </View>
          </View>
        </View>

        <View style={styles.player2}>
          <View style={styles.playerName}>
            <Text style={styles.playerNameText}>{this.props.name2}</Text>
          </View>
          <View style={styles.playerStats}>
            <View style={styles.statsLeft}>

            </View>
            <View style={styles.statsRight}>

            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  player1: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  player2: {
    flex: 1,
    backgroundColor: '#BDBDBD',
  },
  playerName: {
    flex: 1,
    backgroundColor: '#FFEE58',
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
});

function MapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    name2: state.playerNames.name2
  }
}

export default connect(MapStateToProps, null)(MainScreen);
