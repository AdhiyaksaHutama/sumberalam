import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

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
      

      

      <View style={styles.container}>
        <Text style={styles.welcome}>Halo Ganteng!</Text>
         <Image 
        source={require('/Kelas_11/KK4/android/ccnc1/foto.jpg')}
        />
        <Text style={styles.instructions}>Nama:Adhiyaksa Satrai Hutama, </Text>
        <Text style={styles.instructions}>Kelas:XI RPL 3</Text>
        <Text style={styles.instructions}>  No Absen:03</Text>
      
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0976',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
