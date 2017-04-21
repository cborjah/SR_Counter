import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class P1History extends Component {

  renderHistory() {
    return this.props.history.map((item) => {
      return (
        <View style={{ width: (width * 0.1), backgroundColor: item.color, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', paddingLeft: 5, paddingRight: 5, marginRight: 2 }}>
          <Text style={{ fontSize: 20 }}>{item.operator + item.val}</Text>
        </View>
      );
    });
  }

  // Have each val stored as a text in a view. give view background color.

  render() {
    let _scrollView: ScrollView;

    return (
      <View style={{ flex: 1, borderStyle: 'solid', borderTopWidth: 0.5, borderTopColor: '#67696e' }}>
        <ScrollView
          style={{backgroundColor: '#181d26'}}
          horizontal={true}
          ref={(scrollView) => { _scrollView = scrollView; }}
          onContentSizeChange={() => _scrollView.scrollToEnd({animated: true})}
        >
          {this.renderHistory()}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    history: state.player1Stats.history
  }
}

export default connect(mapStateToProps, null)(P1History);
