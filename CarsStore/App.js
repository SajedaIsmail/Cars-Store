import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppLoading } from 'expo';
import * as font from 'expo-font';

import { Home, CarDetails } from './src/screens/index';

const MainStack = createStackNavigator({
  Home: { screen: Home },
  CarDetails: { screen: CarDetails }
})

const AppContainer = createAppContainer(MainStack);


export default class App extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    await font.loadAsync({
      'roboto-medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf')
    })
    this.setState({ loading: false })
  }
  render() {
    const { loading } = this.state;
    if (loading)
      return <AppLoading />

    return (
      <AppContainer />
    );
  }
}
