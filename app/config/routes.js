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
import Dashboard from '../screens/dashboardMain'
import Drives from '../screens/Drives'

const RootStack = createStackNavigator(
  {
  	UserLogin: {
      screen: Login,
      navigationOptions: {
        title: "Login",
        headerLeft: null,
      },
    },
    UserSignup: {
      screen: Signup,
      navigationOptions: {
        title: "Signup",
      },
    },
    UserSignup2: {
      screen: Signup2,
      navigationOptions: {
        title: "Signup",
      },
    },
    UserSignup3: {
      screen: Signup3,
      navigationOptions: {
        title: "Signup",
      },
    },
    UserDashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: "Dashboard",
        //headerLeft: null, TODO: Uncomment this.
      },
    },
    UserDrives: {
      screen: Drives,
      navigationOptions: {
        title: "Drives",
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
