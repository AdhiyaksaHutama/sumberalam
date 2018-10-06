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



class BiodataScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

          <StatusBar
          barStyle="light-content"
          />

          <View style={styles.logoContainer}>

           <Image
       style={styles.logo}
       source={require('E:/Kelas_11/KK4/android/ccnc1/Screen/Gambar/bio.jpg')}
       />


          <TextInput
          placeholder="Adhiyaksa Satria  Hutama"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

          <TextInput
          placeholder="Semarang,08 Juli 2002"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

          <TextInput
          placeholder="SMK TELKOM PURWOKERTO"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

           <TextInput
          placeholder="Islam"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />
          

          <TouchableOpacity style={styles.buttonContainer}>

          <Text style={{marginTop:10, width:300, textAlign:'center',color:'#FFF',fontWeight:'bold',height:15}} onPress={()=>this.props.navigation.navigate('WelcomeScreen')}>Exit</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default BiodataScreen;


const styles = StyleSheet.create({
 
  container: {

      padding: 20,
      backgroundColor:'#0abde3',
      flex: 1,
    alignItems: 'center',


  },
  input:{
    height:40,
    width:300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    marginTop:30,
    color: '#FFF',
    paddingHorizontal:10,
    fontWeight:'bold'
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
  


  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700',
    
  },
  logo:{

    width:120,
    height:120
    
  },  
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center'

  },
 
});
