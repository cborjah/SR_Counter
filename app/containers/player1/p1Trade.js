import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class P1Trade extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.authority}
        onPress={() => this.handleAuthority()}
        underlayColor='#69F0AE'
        activeOpacity={0.9}>
        <Text style={styles.statsText}>{this.state.authority}</Text>
      </TouchableHighlight>
    );
  }
}

export default connect(null, null)(P1Trade);
