import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
// import { IndicatorViewPager } from 'rn-viewpager';

import P2Authority from './p2Authority';
import P2Trade from './p2Trade';
import P2Combat from './p2Combat';
import ActionButton from '../actionButton';
import P2Bases from './p2Bases';
import P2History from './p2History';

class Player2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.player2}>

        <View style={styles.playerStats}>

          <View style={styles.statsTop}>
            <P2Authority />
            <P2Bases />
          </View>

          <View style={styles.statsBottom}>
            <P2Trade />
            <P2Combat />
          </View>

          <View style={styles.fabContainer}>
            <ActionButton
              combatPoints={this.props.combat}
              p1={false}
              p2={true}
              setPage={() => {
                this.props.changeTab();
            }}/>
          </View>

        </View>

        <View style={styles.history}>
          <P2History />
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
  history: {
    flex: 1,
    backgroundColor: '#424242',
    elevation: 5,
  },
  playerNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  playerStats: {
    flex: 15,
    // backgroundColor: '#76FF03'
  },
  statsTop: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: '#29B6F6'
  },
  statsBottom: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: '#4DB6AC',
  },
  statsText: {
    fontSize: 50,
  },
  authority: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: '#757575',
  },
  fabContainer: {
    height: 80,
    // backgroundColor: 'blue'
  }
});

function mapStateToProps(state) {
  return {
    name2: state.playerNames.name2,
    authority: state.player2Stats.authority,
    combat: state.player2Stats.combat
  };
}

export default connect(mapStateToProps, null)(Player2);
