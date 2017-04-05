import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Player1 from '../containers/player1/player1';
import Player2 from '../containers/player2/player2';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar tabStyle={{ paddingBottom: 0, backgroundColor: '#212121', height: 50 }} activeTextColor='white' inactiveTextColor='#444'/>}
          tabBarPosition='top'
          style={{ backgroundColor: '#212121' }}
          tabBarUnderlineStyle={{ backgroundColor: 'white' }}
          // activeTabStyle={{ backgroundColor: '#1E1E1E' }}
          // locked={true}
          ref={tabView => { this.tabView = tabView; }}>
          <Player1 changeTab={() => this.tabView.goToPage(1)} tabLabel={this.props.name1}/>
          <Player2 changeTab={() => this.tabView.goToPage(0)} tabLabel={this.props.name2}/>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

function mapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    name2: state.playerNames.name2,
  };
}

export default connect(mapStateToProps, null)(MainScreen);
