import React,{Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, KeybardAvoidingView, StatusBar} from 'react-native';

export default class Login extends Component {
	render(){
		return(
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
					style={styles.input}
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

					<Text style={styles.buttonText}> Login</Text>
					</TouchableOpacity>
					</View>
					</View>

			);

	}
}

const styles = StyleSheet.create({

	container: {

			padding: 20
	},
	input:{
		height:40,
		width:300,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom:20,
		color: '#FFF',
		paddingHorizontal:10
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

} );




