import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Alert, Image, FlatList, Button } from 'react-native';
import { Dimensions } from 'react-native';
import Card from '../components/Card';

export default class CarDetails extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    const colors = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTAicduy3-CaLIP_DAUf8axxnTnkbwmuOS5XuXp2vDT3rQsZR&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzvTn5IsU9q_fAMBKRSWz3h6U8LJbbrGxP2W3kbP3RJTGP_fdRw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamXUM84wgXqVuSVN9kRUt-lkmYbl9Ee8C0N6cUErBF8Rc-pXa&s',
    ]
    return (
      <SafeAreaView style={styles.homeContainer}>
        <View style={styles.parent}>
          <Text style={styles.carPrice}>$125.500</Text>
          <Image source={require('../assets/images/carhome.png')} style={styles.carImage} />
          <Text style={styles.carName}>Vintage Cars</Text>
          <Text style={styles.discription} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis feugiat metus. Proin nec sem enim. Integer volutpat neque id mauris egestas bibendum. Nullam sit amet bibendum sem. Maecenas tincidunt sagittis sem nec ultrices. Aenean massa lorem.</Text>
          <View style={styles.topSpeed}>
            <Text style={styles.availableColors}>Top speed: </Text>
          </View>
          <Text style={styles.availableColors}>Available Colors</Text>
          <FlatList
            data={colors}
            renderItem={({ item }) => <Card imgSrc={item}
              price='available'
            />}
            keyExtractor={item => item.id}
            horizontal
          />
           <TouchableHighlight
         style={styles.button}
         onPress={()=>Alert('Your Order is submitted successfully ^_^ ')}
        >
         <Text style={styles.buttonText}> Buy now </Text>
        </TouchableHighlight>
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
    margin: 15,
    justifyContent: 'space-around',
    padding: 15,
    alignItems: 'flex-start',
  },

  carPrice: {
    fontSize: 22,
    fontFamily: 'roboto-medium',
    color: '#5A5B63',
    alignSelf: 'center'
  },
  carImage: {
    alignSelf: 'center',
    height: Math.round(Dimensions.get('window').height) / 3,
    width: Dimensions.get('window').width,
  },
  carName: {
    fontSize: 22,
    fontFamily: 'roboto-medium',
    color: '#0E0E11',
    marginTop: 15,
  },

  topSpeed: {
    borderColor: '#E6EEF6',
    borderWidth: 2,
    marginTop: 15,
    alignSelf: 'center'
  },
  discription: {
    fontSize: 14,
    fontFamily: 'roboto-regular',
    color: '#9CA4B0'
  },
  availableColors: {
    fontSize: 16,
    fontFamily: 'roboto-Bold',
    color: '#5A5B63',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    alignSelf: 'center'
  },
  buttonText: {
   color: 'white',
   fontFamily: 'roboto-regular',
   fontSize: 16,
  }
})
