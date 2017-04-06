import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class P1History extends Component {
  render() {
    return (
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({

});

export default connect(null, null)(P1History);
