import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import PlaidAuthenticator from 'react-native-plaid-link'
//import Scroller from "./scroller";

export default class AnimationTry extends React.Component {
  onMessage = (data) => {
    console.log("store", data);
    this.props.actions.addToFavourites('2');
    //this.setState({data})
  }
  render() {

    return (
      <Text onPress={() => this.onMessage(this.props.store)}>Sdada</Text>
    );
  }
}


// <PlaidAuthenticator
//  onMessage={this.onMessage}
//  publicKey="0cfea3b8cf3611b374aecb1a215a39"
//  env="sandbox"
//  product="transactions"
//  clientName="CharityWallet"
//  selectAccount={false}
// />
