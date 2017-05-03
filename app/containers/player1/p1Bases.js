import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Platform } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

import { addDefenseP1, minusDefenseP1 } from '../../actions/player1';
import Responsive from '../../global_styles/responsive';

class P1Bases extends Component {
  componentDidMount() {
    console.log(Responsive.DEVICE_WIDTH);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.bases}>
          <View style={styles.iconContainer}>
            <Svg width={82 * (Responsive.SVG_SCALE - 0.15)} height={82 * (Responsive.SVG_SCALE - 0.15)} viewBox="0 0 82 82">
              <Path fill="#000" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M81 1v16.444C81 70.284 41 81 41 81S1 70.284 1 17.444c0-4.151.14-11.412.236-16.05C5.12 7.723 12.516 11.997 21 11.997c8.658 0 16.183-4.452 20-10.997 3.817 6.545 11.342 10.997 20 10.997S77.183 7.545 81 1z"/>
            </Svg>

            <View style={styles.textContainer}>
              <Text style={styles.text}>{this.props.defense}</Text>
            </View>
          </View>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Defense</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.minusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.minusDefenseP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.plusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.addDefenseP1()}>
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
  bases: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#212121'
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white'
  },
  minusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424242',
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
    backgroundColor: '#424242',
    width: Responsive.DEVICE_WIDTH / 6,
    height: Responsive.DEVICE_HEIGHT / 19,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    marginLeft: 1,
  },
  plus: {
    fontSize: Responsive.FONT_SIZE,
    position: 'relative',
    bottom: 1,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 1,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text: {
    fontSize: (Platform.OS === 'android') ? Responsive.FONT_SIZE_LARGE : Responsive.FONT_SIZE_LARGE - 5,
    fontWeight: (Platform.OS === 'android') ? '100' : '400',
    color: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'orange'
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  label: {
    color: 'white',
    fontSize: Responsive.FONT_SIZE_SMALL,
    // backgroundColor: 'blue'
  }
});

function mapStateToProps(state) {
  return {
    defense: state.player1Stats.defense
  };
}

export default connect(mapStateToProps, { addDefenseP1, minusDefenseP1 })(P1Bases);
