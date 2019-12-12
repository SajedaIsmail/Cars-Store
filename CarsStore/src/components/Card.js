import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const Card = ({ imgSrc, price, carName, onPress }) => (
  <TouchableOpacity onPress = { () => onPress} >
  <View style={styles.container}>
    <ImageBackground borderRadius={10} source={{ uri: imgSrc }} style={styles.image} >
      <View style={styles.priceView}>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </ImageBackground>
    <Text style={styles.carName}>{carName}</Text>
  </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    width: Math.round(Dimensions.get('window').width) / 3,
    height: Math.round(Dimensions.get('window').height) / 5,
    margin: 10,
  },
  priceView: {
    backgroundColor: '#3B3947',
    borderTopLeftRadius: 10,
    height: 30,
    alignSelf: 'stretch',
    alignContent: 'center',
  },
  priceText: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    marginEnd: 15,
    marginStart: 15,
    fontFamily: 'roboto-regular'
  },
  image: {
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  carName: {
    fontSize: 16,
    color: '#3B3947',
    marginTop: 5,
    fontFamily: 'roboto-medium'
  }
})

export default Card;
