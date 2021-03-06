import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions }
    from 'react-native';

import P1Authority from './p1Authority';
import P1Trade from './p1Trade';
import P1Combat from './p1Combat';
import ActionButton from '../actionButton';
import P1Bases from './p1Bases';
import P1History from './p1History';
import Responsive from '../../global_styles/responsive';

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
              setPage={() => { this.props.changeTab(); }}
            />
            <View style={styles.textContainer}>
              <Text style={{
                color: '#6c6f73',
                fontSize: Responsive.FONT_SIZE_SMALLER
              }}>
                History
              </Text>
            </View>
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
    flex: 1
  },
  history: {
    height: Responsive.DEVICE_WIDTH * 0.1,
    backgroundColor: '#424242',
    elevation: 5
  },
  playerStats: {
    flex: 15
  },
  statsTop: {
    flex: 1,
    flexDirection: 'row'
  },
  statsBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  authority: {
    flex: 1,
    flexDirection: 'row'
  },
  fabContainer: {
    height: Responsive.DEVICE_HEIGHT * 0.15
  },
  textContainer: {
    paddingLeft: (Responsive.DEVICE_WIDTH * 0.1) / 5,
    paddingBottom: (Responsive.DEVICE_HEIGHT * 0.1) / 10
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
