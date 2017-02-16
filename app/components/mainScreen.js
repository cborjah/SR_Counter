import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Player1 from '../containers/player1/player1';
import Player2 from '../containers/player2/player2';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Player1 />
      <Player2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MainScreen;
