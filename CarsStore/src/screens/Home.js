import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Alert } from 'react-native';

import Card from '../components/Card';

export default class Home extends Component {

  state = {
  }

  static navigationOptions = {
    header: null,
  }

  handlePress = () => {
    Alert.alert('Hello', 'Card is pressed!')
  }

  render() {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <View style={styles.parent}>
          <Text style={{ fontSize: 36, color: 'black' }}>Home Screen </Text>
          <Card imgSrc='https://cache.desktopnexus.com/thumbseg/793/793390-bigthumbnail.jpg'
            price='$4000'
            carName='Vintage Cars'
            onPress={this.handlePress} />
        </View>
      </SafeAreaView>
    )
  }

}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginTop: 30,
  },
  parent: {
    flex: 1,
  }
})
