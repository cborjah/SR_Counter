import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { setNames } from '../actions/gameSetup';

class GameSetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: null,
      input2: null,
      isFocused1: false,
      isFocused2: false
    }
  }

  handleOnPress() {
    this.props.setNames(this.state.input1, this.state.input2);
    Actions.mainScreen({ type: 'replace' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={[styles.textInput, { marginBottom: 15, opacity: this.state.isFocused1 ? 1 : 0.5 }]}
            placeholder='PLAYER 1'
            placeholderTextColor='#FFFFFF'
            maxLength={10}
            onChangeText={(text) => this.setState({ input1: text.toUpperCase() })}
            onFocus={() => this.setState({ isFocused1: true })}
            onBlur={() => this.setState({ isFocused1: false })}
            autoCorrect={false}
            underlineColorAndroid='#0091EA'/>
          <TextInput
            style={[styles.textInput, { marginTop: 15, opacity: this.state.isFocused2 ? 1 : 0.5 }]}
            placeholder='PLAYER 2'
            placeholderTextColor='#FFFFFF'
            maxLength={10}
            onChangeText={(text) => this.setState({ input2: text.toUpperCase() })}
            onFocus={() => this.setState({ isFocused2: true })}
            onBlur={() => this.setState({ isFocused2: false })}
            autoCorrect={false}
            underlineColorAndroid='#0091EA'/>
        </View>
        <TouchableHighlight
          style={styles.readyBtn}
          onPress={() => this.handleOnPress()}
          underlayColor='#40C4FF'
          activeOpacity={0.9}>
          <Text style={styles.readyBtnText}>READY</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  // text: {
  //   flex: 1,
  //   color: 'white',
  // },
  input: {
    flex: 11,
    alignSelf: 'stretch',
    backgroundColor: '#424242',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  readyBtn: {
    flex: 1,
    backgroundColor: '#0091EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyBtnText: {
    color: 'white',
    fontWeight: '600', // Medium
    fontSize: 20,
    elevation: 2,
  },
  textInput: {
    color: '#FFFFFF',
    fontSize: 30,
    textDecorationLine: 'none'
  }
});

export default connect(null, { setNames })(GameSetup);
