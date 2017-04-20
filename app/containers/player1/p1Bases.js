import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

import { addDefenseP1, minusDefenseP1 } from '../../actions/player1';

const { width, height } = Dimensions.get('window');

class P1Bases extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.bases}>
          <View style={styles.iconContainer}>
            <Svg
              height="192"
              width="192"
            >
              <G id="Defense" stroke="#979797" strokeWidth="4" fill="black" scale="0.7" x="35" y="20">
                <Path d="M172,21 L172,51.5212971 C172,150.854232 97,171 97,171 C97,171 22,150.854232 22,51.5212971 C22,43.8432447 22.2526993,30.5029962 22.4332832,21.7714947 C29.5859409,34.0584341 43.5032168,42.3954254 59.5,42.3954254 C75.8266236,42.3954254 89.9871004,33.7110859 97.0004934,21.0064556 C104.014032,33.7094826 118.173333,42.3925507 134.498465,42.3925507 C150.826362,42.3925507 164.987695,33.7065407 172,21 Z" />
              </G>
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.defense}</Text>
            <Text style={styles.label}>Outpost</Text>
          </View>

        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.minusDefenseP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.addDefenseP1()}>
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        </View>

        {/* <View style={styles.base}>
          <View style={styles.outpostValue}>
            <Text style={styles.text}>0</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.minusAuthorityP1()}>
              <Text style={styles.minus}>-</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress={() => this.props.addAuthorityP1()}>
              <Text style={styles.plus}>+</Text>
            </TouchableHighlight>
          </View>
        </View> */}

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
    backgroundColor: '#212121'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white'
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
  text: {
    fontSize: 50,
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
    defense: state.player1Stats.defense
  };
}

export default connect(mapStateToProps, { addDefenseP1, minusDefenseP1 })(P1Bases);
