import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Player1 from '../containers/player1/player1';
import Player2 from '../containers/player2/player2';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollableTabView renderTabBar={() => <DefaultTabBar tabStyle={{ paddingBottom: 0 }} underlineStyle={{ width: 0 }}/>} tabBarPosition='bottom'>
        <Player1 tabLabel='Player 1'/>
        <Player2 tabLabel='Player 2'/>
      </ScrollableTabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // tabView: {
  //   paddingBottom: 0,
  //   padding: 0,
  // }
});

export default MainScreen;
