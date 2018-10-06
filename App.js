/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginScreen from './Screen/LoginScreen'
import WelcomeScreen from './Screen/WelcomeScreen'
import SignupScreen from './Screen/SignupScreen'
import BiodataScreen from './Screen/BiodataScreen'
import {StackNavigator} from 'react-navigation'




export default class App extends React.Component {
  render() {
    return (
    	<AppStackNavigator/>
        
    );
  }
} 

const AppStackNavigator = new StackNavigator({
 WelcomeScreen :{screen: WelcomeScreen},
	LoginScreen:{screen: LoginScreen},
	SignupScreen:{screen: SignupScreen},
	BiodataScreen:{screen: BiodataScreen},
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
 
  },
 
});
