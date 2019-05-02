import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Signup2 from '../screens/Signup2'
import Signup3 from '../screens/Signup3'
import Dashboard from '../screens/dashboardMain'
import Drives from '../screens/DrivesMain'
import AddAccount from '../screens/PlaidTry'

const AppContainer1 = createBottomTabNavigator(
  {
    Charities: {screen: Drives},
    Home: { screen: Dashboard },
    Settings: { screen: Drives },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`;
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `settings${focused ? '' : ''}`;
        } else if (routeName === 'Charities') {
          iconName = `settings${focused ? '' : ''}`;
        }
        return <Icon name={iconName} size={5} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {marginBottom: -20, paddingTop: 5,}
    },
    initialRouteName: 'Home',
  },
);

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
      screen: AppContainer1,
      navigationOptions: {
        title: "Dashboard",
        initialRouteName: 'Home'
        //headerLeft: null, //TODO: Uncomment this.
      },
    },
    UserDrives: {
      screen: Drives,
      navigationOptions: {
        title: "Drives",
        //headerLeft: null, //TODO: Uncomment this.
      },
    },
    AddAccount: {
      screen: AddAccount,
      navigationOptions: {
        title: "Add Account",
        //headerLeft: null, //TODO: Uncomment this.
      },
    },
  },
);

const Navigator = createAppContainer(RootStack);


export default Navigator;
