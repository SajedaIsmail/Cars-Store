import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Alert, Image, FlatList,TouchableOpacity, ScrollView } from 'react-native';
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
        <ScrollView>
        <View style={styles.parent}>
          <Text style={styles.carPrice}>{`${this.props.navigation.getParam('price')}$`}</Text>
          <Image source={require('../assets/images/carhome.png')} style={styles.carImage} />
          <Text style={styles.carName}>{this.props.navigation.getParam('name')}</Text>
          <Text style={styles.discription} >{this.props.navigation.getParam('description')}</Text>
          <View style={styles.topSpeed}>
            <Text style={styles.availableColors}>Top speed: {this.props.navigation.getParam('topSpeed')}</Text>
          </View>
          <Text style={styles.availableColors}>Available Colors {this.props.navigation.getParam('name')}</Text>
          <FlatList
            data={colors}
            renderItem={({ item }) => <Card imgSrc={item}
              price='available'
            />}
            keyExtractor={item => item.id}
            horizontal
          />
           <TouchableOpacity
         style={styles.button}
         onPress={()=>Alert.alert(
          'Confirm Submitting',
          'Your Order is submitted successfully', )
          }
        >
         <Text style={styles.buttonText}> Buy now </Text>
        </TouchableOpacity>
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
    margin: 15,
    alignSelf: 'center',
    padding: 10,
    flex:1,
    alignItems: 'center'
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
    backgroundColor: '#3B3947',
    padding: 10,
    margin: 10,
    alignSelf: 'stretch',
    flex: 1,
    borderRadius:5,
    shadowRadius: 2,
    shadowColor: '#0E0E11',
    shadowOpacity: 10,
  },
  buttonText: {
   color: 'white',
   fontFamily: 'roboto-Bold',
   fontSize: 16,
  }
})
