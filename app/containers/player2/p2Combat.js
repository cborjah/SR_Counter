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
            <Svg width={85 * 1.2} height={85 * 1.2} viewBox="0 0 85 85">
              <G fill="#D34314" fill-rule="evenodd">
                  <Path d="M41.897 72.943c16.647 0 30.142-13.495 30.142-30.142 0-16.646-13.495-30.141-30.142-30.141S11.755 26.155 11.755 42.8c0 16.647 13.495 30.142 30.142 30.142z"/>
                  <Path d="M41.897 79.725c-20.392 0-36.924-16.531-36.924-36.924 0-20.392 16.532-36.923 36.924-36.923 20.393 0 36.924 16.531 36.924 36.923 0 20.393-16.531 36.924-36.924 36.924zm0-3.165c18.645 0 33.759-15.114 33.759-33.759 0-18.644-15.114-33.758-33.759-33.758-18.644 0-33.759 15.114-33.759 33.758 0 18.645 15.115 33.76 33.76 33.76z"/>
                  <Rect width="2.713" height="13.564" x="40.691" rx="1.356"/>
                  <Rect width="13.564" height="2.713" y="41.696" rx="1.356"/>
                  <Rect width="13.564" height="2.713" x="70.833" y="41.696" rx="1.356"/>
                  <Rect width="2.713" height="13.564" x="40.691" y="71.436" rx="1.356"/>
              </G>
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.combat}</Text>
          </View>

        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Combat</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.minusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.minusCombatP2()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.plusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.addCombatP2()}>
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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#757575'
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
    color: 'white'
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
    color: 'white'
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 1,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey'
  },
  text: {
    fontSize: 50,
    fontWeight: '900',
    color: 'black'
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
    combat: state.player2Stats.combat
  }
}

export default connect(mapStateToProps, { minusCombatP2, addCombatP2 })(P2Combat);
