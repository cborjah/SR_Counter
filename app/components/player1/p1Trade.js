import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableHighlight, Dimensions,
    Platform } from 'react-native';
import { minusTradeP1, addTradeP1 } from '../../actions/player1';
import Svg, { Path } from 'react-native-svg';
import _ from 'lodash';

import Responsive from '../../global_styles/responsive';

class P1Trade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.trade}>
          <View style={styles.iconContainer}>
            <Svg
              width={75 * Responsive.SVG_SCALE}
              height={75 * Responsive.SVG_SCALE}
              viewBox="0 0 75 75"
            >
              <Path
                fill="#F4D719"
                fill-rule="evenodd"
                d="M37.5 75C58.21 75 75 58.21 75 37.5S58.21 0 37.5 0 0 16.79 0 37.5 16.79 75 37.5 75z"
              />
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
          <TouchableHighlight
            style={styles.minusButton}
            underlayColor={'#9E9E9E'}
            onPress={() => this.props.minusTradeP1()}
          >
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.plusButton}
            underlayColor={'#9E9E9E'}
            onPress={() => this.props.addTradeP1()}
          >
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  trade: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: (Platform.OS === 'android') ?
        Responsive.FONT_SIZE_LARGER : Responsive.FONT_SIZE_LARGER - 5,
    fontWeight: (Platform.OS === 'android') ? '900' : '700',
    color: 'black'
  },
  minusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172a4c',
    width: Responsive.DEVICE_WIDTH / 6,
    height: Responsive.DEVICE_HEIGHT / 19,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 5,
    marginRight: 1
  },
  minus: {
    fontSize: Responsive.FONT_SIZE + 5,
    position: 'relative',
    bottom: 2,
    left: 1,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  plusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172a4c',
    width: Responsive.DEVICE_WIDTH / 6,
    height: Responsive.DEVICE_HEIGHT / 19,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    marginLeft: 1
  },
  plus: {
    fontSize: Responsive.FONT_SIZE,
    position: 'relative',
    bottom: 1,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white',
    fontSize: Responsive.FONT_SIZE_SMALL
  }
});

function mapStateToProps(state) {
  return {
    trade: state.player1Stats.trade
  };
}

export default connect(mapStateToProps, { minusTradeP1, addTradeP1 })(P1Trade);
