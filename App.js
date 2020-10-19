
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SubApp from './subApp';
import { Provider } from 'react-redux';
import produce from 'immer';

const { createStore } = require('redux');

//actionCreator
export function clickedUp() {
  return { type: 'UP' }
}

//reducer
const reducer = (state = { value: 1 }, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'UP':
        draft = { value: state.value + 1 };
        return draft;
    }
  });
}

//store
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SubApp />
      </Provider>
    );
  }
};
