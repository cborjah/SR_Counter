import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { minusTradeP1, addTradeP1 } from '../../actions/player1';
import Svg, { Path } from 'react-native-svg';

class P1Trade extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.trade}>

          <Svg
            height="192"
            width="192"
          >
            <Path
              d="M96,171 C137.421356,171 171,137.421356 171,96 C171,54.5786438 137.421356,21 96,21 C54.5786438,21 21,54.5786438 21,96 C21,137.421356 54.5786438,171 96,171 Z"
              id="Oval"
              scale={0.7}
              fill="#FFEE58"
              x={29}
              y={29}
            />
          </Svg>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.trade}</Text>
          </View>

        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.minusTradeP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.addTradeP1()}>
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFEB3B'
  },
  trade: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFEB3B'
    // backgroundColor: '#757575'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
    // backgroundColor: '#757575'
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#424242',
    width: 40,
    height: 40,
    borderRadius: 2,
    elevation: 5
  },
  minus: {
    fontSize: 50,
    position: 'relative',
    bottom: 17,
    color: 'white'
  },
  plus: {
    fontSize: 50,
    position: 'relative',
    bottom: 16,
    color: 'white'
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player1Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP1, addTradeP1 })(P1Trade);
