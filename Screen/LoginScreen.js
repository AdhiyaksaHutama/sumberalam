/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'



class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
          barStyle="light-content"
          />
          <View style={styles.logoContainer}>
          <TextInput
          placeholder="username or email"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="next"
          OnSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={{marginTop:360, backgroundColor: 'rgba(255,255,255,0.2)',marginBottom:20,color: '#FFF',textAlign: 'center',}}
          />

          <TextInput
          placeholder="password"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) =>this.passwordInput = input}
          />
          

          <TouchableOpacity style={styles.buttonContainer}>

          <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('BiodataScreen')}> Login</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default LoginScreen;


const styles = StyleSheet.create({
 
  container: {

      padding: 20,
      backgroundColor:'#0abde3',
      flex:1,
  },
  input:{
    height:40,
    width:370,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal:50
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
 
});
