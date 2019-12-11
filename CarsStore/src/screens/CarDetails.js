import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CarDetails extends Component {
  state = {

  }

  static navigationOptions = {
    header: null,
  }
  
   render(){
     return (
       <View>
         <Text style={{fontSize:36, color:'black'}}>
           Car Details Screen
         </Text>
       </View>
     )
   }
}