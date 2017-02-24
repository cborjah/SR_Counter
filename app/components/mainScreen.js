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
          renderTabBar={() => <DefaultTabBar tabStyle={{ paddingBottom: 0, backgroundColor: '#424242', height: 50 }} underlineStyle={{ width: 0 }} activeTextColor='#01579B' inactiveTextColor='white'/>}
          tabBarPosition='bottom'
          style={{ backgroundColor: '#424242' }}
          locked={true}>
          <Player1 tabLabel={this.props.name1}/>
          <Player2 tabLabel={this.props.name2}/>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    name1: state.playerNames.name1,
    name2: state.playerNames.name2,
  };
}

export default connect(mapStateToProps, null)(MainScreen);
