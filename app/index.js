import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import reducers from './reducers';
import GameSetup from './components/gameSetup';
import MainScreen from './components/mainScreen';
import WinScreen from './components/winScreen';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <Scene key="root">

            <Scene
              key="gameSetup"
              component={GameSetup}
              hideNavBar={true}
              initial
            />

            <Scene
              key="mainScreen"
              component={MainScreen}
              hideNavBar={true}
            />

            <Scene
              key="winScreen"
              component={WinScreen}
              hideNavBar={true}
              winner={''}
            />

          </Scene>
        </Router>
      </Provider>
    );
  }
}
