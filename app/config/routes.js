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
import Signup2 from '../screens/Signup2'
import Signup3 from '../screens/Signup3'
import MockDashboard from '../screens/MockDashboard'

const RootStack = createStackNavigator(
  {
  	UserLogin: { screen: Login },
    UserSignup: { screen: Signup },
    UserSignup2: { screen: Signup2},
    UserSignup3: { screen: Signup3},
    UserDashboard: {screen: MockDashboard},
  },
  {
    navigationOptions: {
      header: null
    },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
