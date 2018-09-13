import React from 'react';
import {Text,View} from 'react-native';

class Judul extends React.Component{

	render(){
		return(
			<View>
			<Text style={style.Judul}>{this.props.title}</Text>
			</View>
			
			)
	}
}


const salon = {
	sampis: {
		color: "#3EFF00",
		fontSize: 30,
		fontWeight :'bold'
		
	}
}
export default Judul;