/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import { connect } from 'react-redux';
import { clickedUp } from './App';

class SubApp extends Component{
    componentDidUpdate(){
        console.log(this.props);
    }
  render(){
    return (  
        <TouchableOpacity style = {styles.body} onPress = {()=>{
            // this.props.dispatch({type : 'UP'});
            this.props.clickedUp();

        }}>
        <Text style = {styles.sectionTitle}> {this.props.myValue} </Text>

        </TouchableOpacity>
    );

  }
};

export default connect((state)=>{
    return { myValue : state.value }
  }, 
  {clickedUp}
)(SubApp);

const styles = StyleSheet.create({
  body: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop: 500,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});


