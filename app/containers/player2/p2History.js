import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class P2History extends Component {
  
  renderHistory() {
    return this.props.history.map((item) => {
      return (
        <View style={{ flex: 1, backgroundColor: item.color, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', paddingLeft: 5, paddingRight: 5 }}>
          <Text style={{ fontSize: 20 }}>{item.operator + item.val}</Text>
        </View>
      );
    });
  }

  // Have each val stored as a text in a view. give view background color.

  render() {
    let _scrollView: ScrollView;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
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
    history: state.player2Stats.history
  }
}

export default connect(mapStateToProps, null)(P2History);
