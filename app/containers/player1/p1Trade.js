import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { setTradeP1 } from '../../actions/player1';

class P1Trade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempTrade: 0
    }
  }

  componentDidMount() {
    this.setState({ tempTrade: this.props.trade });
  }

  handleSubtraction() {
    if(this.state.tempTrade > 0) {
      this.setState({ tempTrade: this.state.tempTrade - 1 });
      setTimeout(() => {
        this.props.setTradeP1(this.state.tempTrade);
      }, 200);
    }
  }

  handleAddition() {
    this.setState({ tempTrade: this.state.tempTrade + 1 });
    setTimeout(() => {
      this.props.setTradeP1(this.state.tempTrade);
    }, 200);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.button}>
          <TouchableHighlight onPress={() => this.handleSubtraction()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
        </View> */}
        <TouchableHighlight style={styles.button} onPress={() => this.handleSubtraction()}>
          <Text style={styles.minus}>-</Text>
        </TouchableHighlight>
        <View style={styles.trade}>
          <Text style={styles.text}>{this.state.tempTrade}</Text>
        </View>
        {/* <View style={styles.button}>
          <TouchableHighlight onPress={() => this.handleAddition()}>
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        </View> */}
        <TouchableHighlight style={styles.button} onPress={() => this.handleAddition()}>
          <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFEB3B',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 30,
    paddingLeft: 30,
  },
  button: {
    flex: 1,
    // flexDirection: 'row',
    // fontSize: 50,
    // width: 40,
    // height: 70,
    backgroundColor: '#FFA000',
    // textAlign: 'center',
    alignItems: 'center',
    // justifyContent: 'center'
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  trade: {
    flex: 2,
    // backgroundColor: '#03A9F4',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 90,
  },
  minus: {
    fontSize: 70,
    // backgroundColor: 'red',
    // height: 80,
    // alignSelf: 'center',
    // textAlign: 'center',
    // justifyContent: 'center'
  },
  plus: {
    fontSize: 70,
    // backgroundColor: 'blue',
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player1Stats.trade
  };
}

export default connect(mapStateToProps, { setTradeP1 })(P1Trade);
