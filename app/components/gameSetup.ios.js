import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Dimensions, StatusBar, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { setNames } from '../actions/gameSetup';

import Responsive from '../global_styles/responsive';
import FadeInView from './animations/fadeInView';

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

      <StatusBar hidden />

        {/* <View style={styles.inputContainer}> */}
        <FadeInView style={styles.inputContainer}>
          <View style={{ borderBottomWidth: 1, borderColor: '#40C4FF', marginBottom: (Responsive.DEVICE_HEIGHT * 0.3) / 2, width: Responsive.DEVICE_WIDTH * 0.8 }}>
            <TextInput
            style={{ height: (Responsive.DEVICE_HEIGHT * 0.15) / 2, color: '#FFFFFF', opacity: this.state.isFocused1 ? 1 : 0.5, fontSize: Responsive.FONT_SIZE }}
            onFocus={() => this.setState({ isFocused1: true })}
            onBlur={() => this.setState({ isFocused1: false })}
            placeholder='PLAYER 1'
            placeholderTextColor='#FFFFFF'
            autoCapitalize='characters'
            onChangeText={(text) => this.setState({input1: text})}
            autoCorrect={false}
            />
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: '#40C4FF', width: Responsive.DEVICE_WIDTH * 0.8 }}>
            <TextInput
            style={{ height: (Responsive.DEVICE_HEIGHT * 0.15) / 2, color: '#FFFFFF', opacity: this.state.isFocused2 ? 1 : 0.5, fontSize: Responsive.FONT_SIZE }}
            onFocus={() => this.setState({ isFocused2: true })}
            onBlur={() => this.setState({ isFocused2: false })}
            placeholder='PLAYER 2'
            placeholderTextColor='#FFFFFF'
            autoCapitalize='characters'
            onChangeText={(text) => this.setState({input2: text})}
            autoCorrect={false}
            />
          </View>
        </FadeInView>
        {/* </View> */}

        {/* <View style={styles.buttonContainer}> */}
        <FadeInView style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.readyBtn}
            onPress={() => this.handleOnPress()}
            underlayColor='#40C4FF'
            activeOpacity={0.9}>
            <Text style={styles.readyBtnText}>READY</Text>
          </TouchableHighlight>
        </FadeInView>
        {/* </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#070d18'
  },
  inputContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  readyBtn: {
    width: Responsive.DEVICE_WIDTH / 1.19,
    height: (Responsive.DEVICE_HEIGHT * 0.2) / 3,
    backgroundColor: '#0091EA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  readyBtnText: {
    fontSize: Responsive.FONT_SIZE_SMALLER,
    ...Platform.select({ ios: { letterSpacing: 2.75 } }),
    fontWeight: '600', // Medium
    color: 'white',
  },
});

export default connect(null, { setNames })(GameSetup);
