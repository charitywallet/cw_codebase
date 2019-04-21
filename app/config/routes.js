import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import MockDashboard from '../screens/MockDashboard'

const RootStack = createStackNavigator(
  {
  	UserLogin: { screen: Login },
    UserSignup: { screen: Signup },
    UserDashboard: {screen: MockDashboard}
  },
  {
    navigationOptions: {
      header: null
    },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
