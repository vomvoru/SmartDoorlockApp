'use strict';

import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import configureStore from './src/store/configureStore';
import Immutable from 'immutable';

const store = configureStore(Immutable.fromJS({}));

class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DoorlockApp', ()=> ReduxCounterUniversal);
