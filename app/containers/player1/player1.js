import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
// import { IndicatorViewPager } from 'rn-viewpager';

import P1Authority from './p1Authority';
import P1Trade from './p1Trade';
import P1Combat from './p1Combat';
import AttackButton from '../attackButton';
import P1Bases from './p1Bases';

class Player1 extends Component {
  constructor(props) {
    super(props);
  }

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
            <P1Authority />
            <P1Bases />
          </View>

          <View style={styles.statsBottom}>
            <P1Trade />
            <P1Combat />
          </View>

          <View style={styles.fabContainer}>
            <AttackButton
              combatPoints={this.props.combat}
              p1={true}
              p2={false}
              setPage={() => {
                this.props.changeTab();
                // this.viewPager.setPage(1);
            }}/>
          </View>

        </View>

      </View>

      // <View style={styles.player1}>
      //   <View style={styles.playerName}>
      //     <Text style={styles.playerNameText}>{this.props.name1}</Text>
      //   </View>
      //   <View style={styles.playerStats}>
      //     <View style={styles.statsTop}>
      //       <TouchableHighlight
      //         style={styles.authority}
      //         onPress={() => this.handleAuthority()}
      //         underlayColor='#69F0AE'
      //         activeOpacity={0.9}>
      //         <Text style={styles.statsText}>{this.props.authority}</Text>
      //       </TouchableHighlight>
      //     </View>
      //     <View style={styles.statsBottom}>
      //       <P1Trade />
      //       <IndicatorViewPager ref={viewPager => this.viewPager = viewPager} style={{ flex: 1 }}>
      //       {/* NOTE: ref={viewPager => this.viewPager = viewPager} allows you to use this.viewPager.setPage(). This also works for ViewPagerAndroid.*/}
      //         <View style={{ flex: 1 }}>
      //           <P1Combat />
      //         </View>
      //         <View>
      //           <AttackButton
      //             combatPoints={this.props.combat}
      //             p1={true}
      //             p2={false}
      //             setPage={() => {
      //               this.props.changeTab();
      //               this.viewPager.setPage(0);
      //             }}/>
      //         </View>
      //       </IndicatorViewPager>
      //     </View>
      //   </View>
      // </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  playerStats: {
    flex: 15,
    // flexDirection: 'row',
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // tradeCombat: {
  //   flex: 1,
  //   flexDirection: 'row'
  // },
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
