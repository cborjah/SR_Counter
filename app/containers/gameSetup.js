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
      input2: null
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
            placeholder='Player 1'
            onChangeText={(text) => this.setState({ input1: text })}
            underlineColorAndroid='black'/>
          <TextInput
            placeholder='Player 2'
            onChangeText={(text) => this.setState({ input2: text })}
            underlineColorAndroid='black'/>
        </View>
        <TouchableHighlight
          style={styles.readyBtn}
          onPress={() => this.handleOnPress()}
          underlayColor='#90CAF9'
          activeOpacity={0.9}>
          <Text style={styles.readyBtnText}>Ready</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    color: 'white',
  },
  input: {
    flex: 11,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  readyBtn: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
  // player2: {
  //   flex: 1,
  //   backgroundColor: 'blue',
  // }
});

export default connect(null, { setNames })(GameSetup);
