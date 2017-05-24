import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Responsive from '../global_styles/responsive';
import Player1 from './player1/player1';
import Player2 from './player2/player2';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar style={styles.main} tabStyle={styles.tab} activeTextColor='white' inactiveTextColor='#444' textStyle={styles.tabText} />}
          tabBarPosition='top'
          style={{ backgroundColor: '#070d18' }}
          tabBarUnderlineStyle={{ backgroundColor: 'white', height: 1 }}
          locked={true}
          ref={tabView => { this.tabView = tabView; }}
          prerenderingSiblingsNumber={1}>
          <Player1 changeTab={() => this.tabView.goToPage(1)} tabLabel={this.props.name1} />
          <Player2 changeTab={() => this.tabView.goToPage(0)} tabLabel={this.props.name2} />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    borderWidth: 0,
    height: (Responsive.DEVICE_HEIGHT * 0.15) / 2
  },
  tab: {
    paddingBottom: 0,
    backgroundColor: '#070d18'
  },
  tabText: {
    fontSize: Responsive.FONT_SIZE_SMALLER,
    ...Platform.select({ ios: { letterSpacing: 2.75, fontWeight: '700' } })
  }
});

function mapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    name2: state.playerNames.name2
  };
}

export default connect(mapStateToProps, null)(MainScreen);
