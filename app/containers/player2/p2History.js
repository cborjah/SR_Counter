import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


class P2History extends Component {

  renderHistory() {
    return this.props.history.map((item) => {
      return (
        <View style={{ width: (width * 0.25) / 2, backgroundColor: item.color, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', marginRight: 2 }}>
          <Text style={{ fontSize: (height * 0.1) / 4 }}>{item.operator + item.val}</Text>
        </View>
      );
    });
  }

  render() {
    let _scrollView: ScrollView;

    return (
      <View style={{ flex: 1, borderStyle: 'solid', borderTopWidth: 0.5, borderTopColor: '#67696e' }}>
        <ScrollView
          style={{ backgroundColor: '#181d26' }}
          horizontal={true}
          ref={(scrollView) => { _scrollView = scrollView; }}
          onContentSizeChange={() => _scrollView.scrollToEnd({ animated: true })}
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
