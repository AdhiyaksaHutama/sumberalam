/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import Login from './Login';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    	<KeyboardAvoidingView behavior="padding" style={styles.container}>
    	<View style={styles.logoContainer}>
       
    	 <Image
    	 style={styles.logo}
    	 source={require('/Kelas_11/KK4/android/ccnc1/logofb.png')}
    	 />

        <Text style={styles.title}>Facebosok</Text>
        </View>
        <View style={styles.formConatiner}>
        <Login/>
        </View>     
        </KeyboardAvoidingView>
        
    );
  }
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0976',
  },
  logoContainer:{
  	alignItems: 'center',
  	flexGrow: 1,
  	justifyContent: 'center'

  },

  logo:{

  	width:120,
  	height:120
  },

  title:{
  	fontSize:30,
  	fontWeight:'bold',	
  	color: '#FFF',
  	marginTop: 10,
  	width:160,
  	textAlign: 'center',
  	opacity: 0.9
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
