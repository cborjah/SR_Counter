import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

import { addDefenseP2, minusDefenseP2 } from '../../actions/player2';

const { width, height } = Dimensions.get('window');

class P2Bases extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.bases}>
          <View style={styles.iconContainer}>
            <Svg width={82 * 1.1} height={82 * 1.1} viewBox="0 0 82 82">
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
          <TouchableHighlight style={styles.minusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.minusDefenseP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.plusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.addDefenseP2()}>
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
    // backgroundColor: 'pink'
  },
  minusButton: {
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
    color: 'white'
  },
  plusButton: {
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
    color: 'white'
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
    color: 'white',
    fontWeight: '100'
  },
  iconContainer: {
    flex: 5,
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
    defense: state.player2Stats.defense
  };
}

export default connect(mapStateToProps, { addDefenseP2, minusDefenseP2 })(P2Bases);
