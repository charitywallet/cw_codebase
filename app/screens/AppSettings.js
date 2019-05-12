import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import PlaidAuthenticator from 'react-native-plaid-link'
import {Overlay} from 'react-native-elements';


class AppSettings extends Component {
  constructor() {
     super();
     this.state = { isVisible: true }
   };
  onMessage = (data) => {
    console.log("data", data);
    this.setState({data})
  }

  handlePressBackdrop = () => {
    this.setState({ isVisible: false });
  }

  render() {

    return(
      <Text>App settings go here.</Text>
    );
  }
}

export default AppSettings;
