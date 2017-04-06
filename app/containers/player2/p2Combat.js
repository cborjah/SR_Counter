import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { minusCombatP2, addCombatP2 } from '../../actions/player2';
import Svg, { Path, Rect, G } from 'react-native-svg';

const {width, height} = Dimensions.get('window');

class P2Combat extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.combat}>
          <View style={styles.iconContainer}>
            <Svg
              height="192"
              width="192"
            >
              <G id="Group" x="39.5" y="15.5" scale="0.7">
              {/* <G id="Group" scale="0.7"> */}
                <Path d="M90,165 C131.421356,165 165,131.421356 165,90 C165,48.5786438 131.421356,15 90,15 C48.5786438,15 15,48.5786438 15,90 C15,131.421356 48.5786438,165 90,165 Z" id="Oval" stroke="#EF5350" stroke-width="4" fill="#EF5350" />
                <Rect id="Rectangle-2" fill="#EF5350" x="88" y="0" width="4" height="15" rx="2" />
                <Rect id="Rectangle" fill="#EF5350" x="0" y="88" width="15" height="4" rx="2" />
                <Rect id="Rectangle" fill="#EF5350" x="165" y="88" width="15" height="4" rx="2" />
                <Rect id="Rectangle-2-Copy" fill="#EF5350" x="88" y="165" width="4" height="15" rx="2" />
              </G>
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.combat}</Text>
            <Text style={styles.label}>COMBAT</Text>
          </View>

        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.minusCombatP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor={'#9E9E9E'} onPress={() => this.props.addCombatP2()}>
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
  },
  combat: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#757575'
  },
  text: {
    fontSize: 50,
  },
  button: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#424242',
    width: width / 6,
    height: height / 16,
    borderRadius: 2,
    elevation: 5,
    marginRight: 1,
    marginLeft: 1
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
    alignItems: 'center',
    // backgroundColor: 'grey'
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
    combat: state.player2Stats.combat
  }
}

export default connect(mapStateToProps, { minusCombatP2, addCombatP2 })(P2Combat);
