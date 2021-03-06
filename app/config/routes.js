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
//import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Signup2 from '../screens/Signup2'
import Signup3 from '../screens/Signup3'
import Dashboard from '../screens/dashboardMain'
import Drives from '../screens/DrivesMain'
import Settings from '../screens/SettingsMain'
import DriveInfoHeader from '../components/CharityTabComponents/DriveInfoHeader/DriveInfoHeader'
import DriveInformation from '../screens/DriveInformation'
import CharityInformation from '../screens/CharityInformation'
import PlaidPage from '../screens/PlaidPage'
import RecommendedDrives from '../screens/RecommendedDrives'
import GettingStarted from '../screens/GettingStarted'

const AppContainer1 = createBottomTabNavigator(
  {
    Drives: {
      screen: Drives,
      navigationOptions: {
        style:{fontSize: 30}

        }
      },
    Home: { screen: Dashboard },
    Settings: { screen: Settings },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `settings`;
        } else if (routeName === 'Drives') {
          iconName = `public`;
        }
        return <Icon name={iconName} size={30} color={tintColor}/>;
      },
      // tabBarOnPress: ({ navigation, defaultHandler }) => {
      //   console.log('onPress:', navigation.state.routeName);
      //   defaultHandler()
      // },
    }),
    tabBarOptions: {
      activeTintColor: '#4B97A1',
      //activeTintColor: '#D3827E',
      inactiveTintColor: 'gray',
      style: {
        marginBottom: -20,
        paddingTop: 5,
        //backgroundColor: '#92C7C7',
      },
      labelStyle: {
        fontSize: 11,
        fontWeight: '500'
      }
    },
    initialRouteName: 'Home',
  },
);

const RootStack = createStackNavigator(
  {
  	UserLogin: {
      screen: Login,
      navigationOptions: {
        title: "Charity Wallet",
        headerLeft: null,
      },
    },
    UserSignup: {
      screen: Signup,
      navigationOptions: {
        title: "Signup",
        headerBackTitle: 'Back',
      },
    },
    UserSignup2: {
      screen: Signup2,
      navigationOptions: {
        title: "Signup",
        headerBackTitle: 'Back',
      },
    },
    UserSignup3: {
      screen: Signup3,
      navigationOptions: {
        title: "Signup",
        headerBackTitle: 'Back',
      },
    },
    PlaidPage: {
      screen: PlaidPage,
      navigationOptions: {
        title: "Link account",
        //headerLeft: null,
        headerTintColor: '#F0F0F0',
        headerStyle: {
          backgroundColor: '#258895',
        },
      },
    },
    UserDashboard: {
      screen: AppContainer1,
      navigationOptions: {
        title: "Charity Wallet",
        gesturesEnabled: false,
        initialRouteName: 'Home',
        headerLeft: null, //TODO: Uncomment this.
        headerBackTitle: 'Back',
        headerTintColor: '#F0F0F0',
        headerStyle: {
          //backgroundColor: '#D3827E',
          backgroundColor: '#4B97A1',
          //backgroundColor: '#3D96A1',
        },
      },
    },
    UserDrives: {
      screen: Drives,
      navigationOptions: {
        title: "Drives",
      },
    },
    DriveInfoHeader: {
      screen: DriveInfoHeader,
      navigationOptions: {
        //title: "Drives",
      },
    },
    DriveInformation: {
      screen: DriveInformation,
      navigationOptions: {
        //title: "Dashboard",
        //initialRouteName: 'Drives',
        headerTintColor: '#F0F0F0',
        headerStyle: {
          backgroundColor: '#258895',
        },
      },
    },
    CharityInformation: {
      screen: CharityInformation,
      navigationOptions: {
        headerTintColor: '#F0F0F0',
        headerStyle: {
          backgroundColor: '#258895',
        },
      },
    },
    RecommendedDrives: {
      screen: RecommendedDrives,
      navigationOptions: {
        headerTintColor: '#F0F0F0',
        headerStyle: {
          backgroundColor: '#258895',
        },
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Settings",
        headerTintColor: '#F0F0F0',
        headerStyle: {
          backgroundColor: '#258895',
        },
      },
    },
    AppIntro: {
      screen: GettingStarted,
      navigationOptions: {
        //title: "Settings",
        //headerTintColor: '#F0F0F0',
        //headerStyle: {
        //  backgroundColor: '#258895',
        //},
      },
    },
  },
);

const Navigator = createAppContainer(RootStack);


export default Navigator;
