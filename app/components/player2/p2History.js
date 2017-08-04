import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Responsive from '../../global_styles/responsive';

class P2History extends Component {

  renderHistory() {
    return this.props.history.map((item, i) => {
      return (
        <View key={i} style={[styles.container, (i === this.props.history.length - 1) ? { marginRight: 0 } : { marginRight: 2 }, { width: (Responsive.DEVICE_WIDTH * 0.25) / 2, backgroundColor: item.backgroundColor, borderWidth: item.borderWidth, borderColor: item.borderColor }]}>
          <Text style={{ fontSize: Responsive.FONT_SIZE - 2, color: item.color }}>{item.operator + item.val}</Text>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginRight: 2,
  }
});

function mapStateToProps(state) {
  return {
    history: state.player2Stats.history
  }
}

export default connect(mapStateToProps, null)(P2History);
