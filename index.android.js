/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung luas Segitiga
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Alas"
              onChangeText={(alas)=>this.setState({alas})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                luas: (this.state.alas*this.state.tinggi/2)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Alas =  {this.state.alas} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Luas = {this.state.luas}
          </Text>
         </View>
      
   </View> 

    );
  }

}






AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
