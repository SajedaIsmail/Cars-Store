import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default class Home extends Component {

  state = {

  }

  static navigationOptions = {
    header: null,
  }
  render () {
    return (
   <View>
     <Text style={{fontSize: 36, color:'black'}}>Home Screen </Text>
   </View>
    )
  }
  
}
