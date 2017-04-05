import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

import { addDefenseP1, minusDefenseP1 } from '../../actions/player1';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class P1Bases extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.outpostValue}>

          <Svg
            height="192"
            width="192"
          >
            <G id="Defense" stroke="#979797" stroke-width="4" fill="#D8D8D8" scale="0.7" x="28.8" y="28">
            <Path d="M175.858348,9 C175.952231,9.00034334 176,9.00051958 176,9.00051958 L176,51.4592228 C176,161.651785 96,184 96,184 C96,184 16,161.651785 16,51.4592228 C16,40.9074183 16.4136815,20.7156093 16.5823039,12.5468309 C19.8397589,31.9961177 36.3734027,46.7958211 56.2797203,46.7958211 C76.2330636,46.7958211 92.7977795,31.9261108 96,12.408915 C99.2022205,31.9261108 115.766936,46.7958211 135.72028,46.7958211 C156.820291,46.7958211 174.131012,30.1679551 175.858348,9 Z" id="Combined-Shape" />
            </G>
          </Svg>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.defense}</Text>
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
  outpost: {
    flex: 1,
    backgroundColor: 'purple'
  },
  base: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'pink'
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
  outpostValue: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps(state) {
  return {
    defense: state.player1Stats.defense
  };
}

export default connect(mapStateToProps, { addDefenseP1, minusDefenseP1 })(P1Bases);
