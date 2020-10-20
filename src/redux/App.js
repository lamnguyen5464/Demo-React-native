
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
import {store} from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SubApp />
      </Provider>
    );
  }
};
