import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight, Dimensions } from 'react-native';
import { minusTradeP2, addTradeP2 } from '../../actions/player2';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

class P2Trade extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.trade}>
          <View style={styles.iconContainer}>
            <Svg
              height="192"
              width="192"
            >
              <Path
                d="M96,171 C137.421356,171 171,137.421356 171,96 C171,54.5786438 137.421356,21 96,21 C54.5786438,21 21,54.5786438 21,96 C21,137.421356 54.5786438,171 96,171 Z"
                id="Oval"
                scale={0.7}
                fill="#FFEE58"
                x="35"
                y="11"
              />
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.trade}</Text>
            <Text style={styles.label}>Trade</Text>
          </View>

        </View>

        <View style={styles.
          buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.minusTradeP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.addTradeP2()}>
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFEB3B'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 50
  },
  button: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#424242',
    // width: 40,
    // height: 40,
    width: width / 6,
    height: height / 16,
    borderRadius: 2,
    elevation: 5,
    marginLeft: 1,
    marginRight: 1
  },
  minus: {
    fontSize: 50,
    position: 'relative',
    bottom: 17,
    color: 'white'
  },
  plus: {
    fontSize: 40,
    position: 'relative',
    bottom: 9,
    color: 'white'
  },
  iconContainer: {
    flex: 5,
    // backgroundColor: 'orange',
    alignItems: 'center'
  },
  label: {
    color: 'grey',
    position: 'relative',
    top: 38,
    fontSize: 20
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player2Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP2, addTradeP2 })(P2Trade);
