import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { IndicatorViewPager } from 'rn-viewpager';

import P2Trade from './p2Trade';
import P2Combat from './p2Combat';
import AttackButton from '../attackButton';

class Player2 extends Component {
  constructor(props) {
    super(props);
  }

  handleAuthority() {
    // Navigate to edit authority scene
  }

  render() {
    return (
      <View style={styles.player2}>
        <View style={styles.playerName}>
          <Text style={styles.playerNameText}>{this.props.name2}</Text>
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
            <P2Trade />
            <IndicatorViewPager ref={viewPager => this.viewPager = viewPager} style={{ flex: 1 }}>
            {/* NOTE: ref={viewPager => this.viewPager = viewPager} allows you to use this.viewPager.setPage(). This also works for ViewPagerAndroid.*/}
              <View style={{ flex: 1 }}>
                <P2Combat />
              </View>
              <View>
                <AttackButton
                  combatPoints={this.props.combat}
                  p1={false}
                  p2={true}
                  setPage={() => {
                    this.props.changeTab();
                    this.viewPager.setPage(0);
                  }}/>
              </View>
            </IndicatorViewPager>
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
    combat: state.player2Stats.combat
  };
}

export default connect(mapStateToProps, null)(Player2);
