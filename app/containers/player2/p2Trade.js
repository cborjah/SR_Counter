import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight, Dimensions, Platform } from 'react-native';
import { minusTradeP2, addTradeP2 } from '../../actions/player2';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

class P2Trade extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.trade}>
          <View style={styles.iconContainer}>
            <Svg width={75 * 1.2} height={75 * 1.2} viewBox="0 0 75 75">
              <Path fill="#F4D719" fill-rule="evenodd" d="M37.5 75C58.21 75 75 58.21 75 37.5S58.21 0 37.5 0 0 16.79 0 37.5 16.79 75 37.5 75z"/>
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.trade}</Text>
          </View>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Trade</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.minusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.minusTradeP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.plusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.addTradeP2()}>
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
    flex: 2,
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
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text: {
    fontSize: (Platform.OS === 'android') ? 50 : 45,
    fontWeight: (Platform.OS === 'android') ? '900' : '700',
    color: 'black'
  },
  minusButton: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424242',
    width: width / 6,
    height: height / 19,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 5,
    marginRight: 1
  },
  minus: {
    fontSize: 30,
    position: 'relative',
    bottom: 2,
    left: 1,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  plusButton: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424242',
    width: width / 6,
    height: height / 19,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    marginLeft: 1,
  },
  plus: {
    fontSize: 25,
    position: 'relative',
    bottom: 1,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'orange',
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  label: {
    color: 'white',
    fontSize: 20
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player2Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP2, addTradeP2 })(P2Trade);
