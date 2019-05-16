import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from '../components/Container';
import {AddPlaidAccountExternal} from '../components/AddCreditCard'

const styles = EStyleSheet.create({
  heading: {
    color: '$inputText',
    fontSize: 24,
    fontFamily: '$textFont',
    paddingTop: 10,
  },
  container:{
    flex: 1,
    //alignItems: 'center',
    padding: 15,
  },
  list: {
    color: '$inputText',
    fontSize: 18,
    fontFamily: '$textFont',
    textAlign: 'left',
    paddingTop: 10,
  }
});


class Cards extends Component {
  constructor() {
     super();
     this.state = { isVisible: true }
   };

  render() {

    return(
      <View style={styles.container}>
        <Text style={styles.heading}>SPENDING ACCOUNTS</Text>
        <Text style={styles.list}>1. Chase account</Text>
        {/*<AddPlaidAccountExternal navigation={this.props.navigation} user_id={user_id} title="Add Spending Account"/>*/}
        <AddPlaidAccountExternal title=""/>
        <Text style={styles.heading}>DONATION ACCOUNTS</Text>
        {/*<AddPlaidAccountExternal navigation={this.props.navigation} user_id={user_id} title="Add Checking Account"/>*/}
        <AddPlaidAccountExternal title=""/>
      </View>

    );
  }
}

export default Cards;

//
// <View style={styles.container}>
//   <Text style={styles.heading}>SPENDING ACCOUNTS</Text>
//   <Text style={styles.list}>1. Chase account</Text>
//   {/*<AddPlaidAccountExternal navigation={this.props.navigation} user_id={user_id} title="Add Spending Account"/>*/}
//   <AddPlaidAccountExternal title="Add Spending Account"/>
//   <Text style={styles.heading}>CHECKING ACCOUNTS</Text>
//   <Text style={styles.list}>1. Bank of America account</Text>
//   {/*<AddPlaidAccountExternal navigation={this.props.navigation} user_id={user_id} title="Add Checking Account"/>*/}
//   <AddPlaidAccountExternal title="Add Checking Account"/>
// </View>
