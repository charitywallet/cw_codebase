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
  	UserLogin: {
      screen: Login,
      navigationOptions: {
      title: "Login",
      headerLeft: null,
    },
  },
    UserSignup: { screen: Signup },
    UserSignup2: { screen: Signup2},
    UserSignup3: { screen: Signup3},
    UserDashboard: {screen: MockDashboard,
      navigationOptions: {
      title: "Dashboard",
      //headerLeft: null, TODO: Uncomment this.
    },
  },
  },
//   {
//     navigationOptions: {
//       header: null,
//       headerLeft: null,
//       visible: false,
//     },
// }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
