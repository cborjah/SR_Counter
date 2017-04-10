import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
// import { IndicatorViewPager } from 'rn-viewpager';

import P1Authority from './p1Authority';
import P1Trade from './p1Trade';
import P1Combat from './p1Combat';
import ActionButton from '../actionButton';
import P1Bases from './p1Bases';
import P1History from './p1History';

class Player1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.player1}>

        <View style={styles.playerStats}>

          <View style={styles.statsTop}>
            <P1Authority />
            <P1Bases />
          </View>

          <View style={styles.statsBottom}>
            <P1Trade />
            <P1Combat />
          </View>

          <View style={styles.fabContainer}>
            <ActionButton
              combatPoints={this.props.combat}
              p1={true}
              p2={false}
              setPage={() => {
                this.props.changeTab();
            }}/>
          </View>

        </View>

        <View style={styles.history}>
          <P1History />
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
  history: {
    flex: 1,
    backgroundColor: '#424242',
    elevation: 5,
  },
  playerStats: {
    flex: 15,
    // backgroundColor: '#76FF03'
  },
  statsTop: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#29B6F6'
  },
  statsBottom: {
    flex: 1,
    flexDirection: 'row',
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
    name1: state.playerNames.name1,
    authority: state.player1Stats.authority,
    combat: state.player1Stats.combat
  };
}

export default connect(mapStateToProps, null)(Player1);
