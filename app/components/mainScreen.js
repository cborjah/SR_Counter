import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import { tabChanged } from '../actions/tabs';
import Responsive from '../global_styles/responsive';
import Player1 from '../containers/player1/player1';
import Player2 from '../containers/player2/player2';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar style={{ borderWidth: 0, height: (Responsive.DEVICE_HEIGHT * 0.15) / 2 }} tabStyle={{ paddingBottom: 0, backgroundColor: '#070d18', height: 50 }} activeTextColor='white' inactiveTextColor='#444' textStyle={{ fontSize: Responsive.FONT_SIZE_SMALLER, ...Platform.select({ ios: { letterSpacing: 2.75, fontWeight: '700' } }) }} />}
          tabBarPosition='top'
          // style={this.props.activeTab ? { backgroundColor: '#212121', transform: [{ rotate: '180deg'}]} : { backgroundColor: '#212121' }}
          style={{ backgroundColor: '#070d18' }}
          tabBarUnderlineStyle={{ backgroundColor: 'white', height: 1 }}
          // activeTabStyle={{ backgroundColor: '#1E1E1E' }}
          locked={true}
          ref={tabView => { this.tabView = tabView; }}
          onChangeTab={({i, ref}) => this.props.tabChanged(i)}
          prerenderingSiblingsNumber={1}
        >
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
  }
});

function mapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    name2: state.playerNames.name2,
    activeTab: state.tabs.activeTab
  };
}

export default connect(mapStateToProps, { tabChanged })(MainScreen);
