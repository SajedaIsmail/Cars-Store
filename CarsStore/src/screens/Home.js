import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Alert, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

import Card from '../components/Card';
import { firebaseFeatures } from '../../config';
// import console = require('console');

// import console = require('console');


let carsRef = firebaseFeatures.db.ref('/cars');

export default class Home extends Component {

  state = {
    cars: [
    ]
  }

  componentDidMount() {
    firebaseFeatures.firestore.collection('cars').get().then(snapshot => {
      const cars = [];
      snapshot.forEach(doc => {
        cars.push({ id: doc.id, ...doc.data() })
      })
      return cars;
    }).then(cars => this.setState({ cars }))
  }

  static navigationOptions = {
    header: null,
  }

  handlePress = (price, name, imgURL, description, topSpeed) => {
    const { navigate } = this.props.navigation;
    navigate('CarDetails', { name, price, imgURL, description, topSpeed });
  }

  render() {
    const { cars } = this.state;
    console.log(cars);
    return (
      <SafeAreaView style={styles.homeContainer}>
        <ScrollView>
          <View style={styles.parent}>
            <Text style={styles.bestDealText}>Best Deal!</Text>
            <Text style={styles.bestDealPrice}>$125.500</Text>
            <Image source={require('../assets/images/carhome.png')} style={styles.homeImage} />
            <Text style={styles.homeCarName}>Vintage Cars</Text>
            <Text style={styles.discription} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis feugiat metus. Proin nec sem enim. Integer volutpat neque id mauris egestas bibendum. Nullam sit amet bibendum sem. Maecenas tincidunt sagittis sem nec ultrices. Aenean massa lorem.</Text>
            <Text style={styles.allCars}>All Cars</Text>
            {cars.length > 0 ? (
              <FlatList
                data={cars}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    onPress={() => this.handlePress(item.price, item.name, item.imgURL, item.description, item.topSpeed)} >
                    <Card imgSrc={item.imgURL}
                      price={`${item.price}$`}
                      carName={item.name}
                    /></TouchableOpacity>}
                keyExtractor={item => item.id}
                horizontal
              />
            ) : (
                <Text>No cars available</Text>
              )}
          </View>
        </ScrollView>
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
    margin: 15,
    justifyContent: 'space-around',
    padding: 15,
    alignItems: 'flex-start',
  },
  bestDealText: {
    fontSize: 22,
    fontFamily: 'roboto-Bold',
    color: '#5A5B63',
  },
  bestDealPrice: {
    fontSize: 22,
    fontFamily: 'roboto-medium',
    color: '#5A5B63'
  },
  homeImage: {
    alignSelf: "flex-start",
    height: Math.round(Dimensions.get('window').height) / 3,
    width: Dimensions.get('window').width,
  },
  homeCarName: {
    fontSize: 22,
    fontFamily: 'roboto-medium',
    color: '#0E0E11',
    marginTop: 15,
  },
  discription: {
    fontSize: 14,
    fontFamily: 'roboto-regular',
    color: '#9CA4B0'
  },
  allCars: {
    fontSize: 16,
    fontFamily: 'roboto-Bold',
    color: '#5A5B63',
    marginTop: 10,
  }
})
