import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import { Actions } from 'react-native-router-flux';

import { addAuthorityP1, minusAuthorityP1 } from '../../actions/player1';

const { width, height } = Dimensions.get('window');

class P1Authority extends Component {

  componentDidUpdate() {
    if(this.props.authority <= 0) {
      Actions.winScreen({ type: 'replace', winner: this.props.name2 });
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.authority}>
          <View style={styles.iconContainer}>
            <Svg width={126 * 1.2} height={128} viewBox="0 -5 126 75">
              <Path fill="#6BEF81" fill-rule="evenodd" d="M30.134 0H95.91v50.674L62.975 75 30.09 51.407 30.134 0zm69.538 0H126l-10.274 9.524H99.672V0zm0 12.698h14.104l-10.258 9.524h-3.846v-9.524zM0 0h26.328v9.524H10.274L0 0zm12.224 12.698h14.104v9.524h-3.847l-10.257-9.524z"/>
            </Svg>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.authority}</Text>
          </View>

        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Authority</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.minusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.minusAuthorityP1()}>
            <Text style={styles.minus}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.plusButton} underlayColor={'#9E9E9E'} onPress={() => this.props.addAuthorityP1()}>
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
    // backgroundColor: '#212121',
    // backgroundColor: 'orange'
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white'
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
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
    // backgroundColor: 'orange'
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
    authority: state.player1Stats.authority,
    name2: state.playerNames.name2
  };
}

export default connect(mapStateToProps, { addAuthorityP1, minusAuthorityP1 })(P1Authority);
