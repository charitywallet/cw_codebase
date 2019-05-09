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
       <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="0cfea3b8cf3611b374aecb1a215a39"
        env="sandbox"
        product="transactions"
        clientName="CharityWallet"
        selectAccount={false}
      />
    );
  }
}

export default AppSettings;
