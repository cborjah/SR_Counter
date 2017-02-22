import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Player1 from '../containers/player1/player1';
import Player2 from '../containers/player2/player2';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar tabStyle={{ paddingBottom: 0, backgroundColor: '#424242', height: 50 }} underlineStyle={{ width: 0 }} activeTextColor='#01579B' inactiveTextColor='white'/>}
        tabBarPosition='bottom'
        style={{ backgroundColor: '#424242' }}>
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
});

export default MainScreen;
