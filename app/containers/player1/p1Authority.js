import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Svg, { Polygon, G } from 'react-native-svg';

import { addAuthorityP1, minusAuthorityP1 } from '../../actions/player1';

const { width, height } = Dimensions.get('window');

class P1Authority extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.authority}>
          <View style={styles.iconContainer}>
            <Svg
              height="192"
              width="192"
            >
              <G id="Authority" stroke="#69F0AE" stroke-width="4" fill="#69F0AE" scale="0.8" rotate="180" x="179" y="169">
                <Polygon id="Path-2" points="29 67.0120361 96.4487033 4 164 68.9696784 164 189 29.0907393 189" />
              </G>
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.authority}</Text>
            <Text style={styles.label}>AUTHORITY</Text>
          </View>

        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.minusAuthorityP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.addAuthorityP1()}>
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
    // backgroundColor: 'green'
  },
  authority: {
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
  text: {
    fontSize: 50
  },
  button: {
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
    authority: state.player1Stats.authority
  };
}

export default connect(mapStateToProps, { addAuthorityP1, minusAuthorityP1 })(P1Authority);
