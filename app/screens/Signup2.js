import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'
import {OverlaySignup} from '../components/OverlaySignup'
import {AddCreditCard} from '../components/AddCreditCard'

import { Input, Button, SocialIcon } from 'react-native-elements';

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const imageWidth = Dimensions.get('window').width;

class Signup2 extends Component {

  //() => {this.setState({ isVisible: false }); navigate('UserDashboard')}

  constructor() {
     super();
     this.state = { isVisible: true }//, valueArray: [], disabled: false }
    //  this.addNewEle = false;
    //  this.index = 0;
   };

   handlePressBackdrop = () => {
     this.setState({ isVisible: false });
   }

   handleFillNowButton = () => {
     this.setState({ isVisible: false });
   };

  //  handleLaterButton = () => {
  //    navigate('UserDashboard');
  //  };

   handleCC = form => console.log(form);

  render() {
    //const {navigate} = this.props.navigation;
    return(
      <Container >

      <LoginInput text='First Name'/>
      <LoginInput text='Last Name'/>
      <AddCreditCard/>
      <AddCreditCard/>
      <LoginButton text='Next'/>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
  },
    creditCardContainer: {
      // paddingTop: 15,
      // width: '50%',
      // paddingLeft: 20,
      paddingRight: 20,
      marginRight: 20,
    },
    addButtonContainer: {
      paddingLeft: 20,
    },
});


export default Signup2;

// <OverlaySignup text = 'Thanks for signing up! There are a few more details we would like you to fill for a better experience.'
//  stateInitial={this.state.isVisible} onBackdropPress={this.handlePressBackdrop}
//  handleFillNowButton={this.handleFillNowButton}
//  handleLaterButton={() => {this.setState({ isVisible: false }); navigate('UserDashboard')}}
//  button1="Fill Now" button2="Later"/>

// onPress = {() => navigate('UserDashboard')}
