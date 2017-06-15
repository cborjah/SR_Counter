import React from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: this.props.duration || 1000,
      }
    ).start();                        // Starts the animation
  }

  fadeOut() {
    
  }

  render() {
    let { fadeAnim } = this.state;
    let { style } = this.props;

    console.log(fadeAnim);

    return (
      <Animated.View style={[ style, { opacity: fadeAnim }]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeInView;
