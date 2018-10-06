/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

class WelcomeScreen extends Component{
  render() {
    return (
     <View style={styles.container}>
      <View style={styles.logoContainer}>
       
       <Image
       style={styles.logo}
       source={require('E:/Kelas_11/KK4/android/ccnc1/Screen/Gambar/logofb.png')}
       />

        <Text style={styles.title}>Hello There</Text>
        </View>
        <View style={styles.formConatiner}>
        
        </View>     
      
     <TouchableOpacity style={styles.buttonContainer}>


          <Text  onPress={()=>this.props.navigation.navigate('LoginScreen')} style={styles.buttonText}> Login</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>


          <Text  onPress={()=>this.props.navigation.navigate('SignupScreen')} style={styles.buttonText} > SignUp</Text>

          </TouchableOpacity>


        </View> 
    	
    );
  }
} 

export default WelcomeScreen;

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
    marginBottom: 5,
  },
    buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
    height:50,
    width:300,
    
    marginBottom:40,

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
 
  });
