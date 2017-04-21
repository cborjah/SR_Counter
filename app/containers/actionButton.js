import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { p1Attacks } from '../actions/player1';
import { p2Attacks } from '../actions/player2';

const width = Dimensions.get('window').width;

class ActionButton extends Component {
  constructor(props) {
    super(props);
  }

  handleAttack() {
    if(this.props.p1) {
      this.props.p1Attacks(this.props.combatPoints);
      this.props.setPage();
    } else if (this.props.p2) {
      this.props.p2Attacks(this.props.combatPoints);
      this.props.setPage();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleAttack()}
          underlayColor='#E57373'
          activeOpacity={0.9}
        >
          <Text style={styles.text}>{this.props.combatPoints ? "ATTACK" : "END TURN"}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    backgroundColor: '#EF5350',
    width: width / 1.19,
    alignItems: 'center',
    borderRadius: 2,
    elevation: 10,
    paddingTop: 9,
    paddingBottom: 9
  }
});

function mapStateToProps(state) {
  return {
    p1Authority: state.player1Stats.authority,
    p2Authority: state.player2Stats.authority
  }
}

export default connect(mapStateToProps, { p1Attacks, p2Attacks })(ActionButton);
