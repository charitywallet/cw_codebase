import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'
import {OverlaySignup} from '../components/OverlaySignup'

import { Input, Button, SocialIcon } from 'react-native-elements';

class Signup2 extends Component {
  constructor() {
     super();
     this.state = { isVisible: true }
   };

   handlePressBackdrop = () => {
     this.setState({ isVisible: false });
   }

   handleFillNowButton = () => {
     this.setState({ isVisible: false });
   };

   handleLaterButton = () => {
     this.setState({ isVisible: false });
   };

  render() {
    return(
      <Container>
      <OverlaySignup text = 'Thanks for signing up! There are a few more details we would like you to fill for a better experience.'
      stateInitial={this.state.isVisible} onBackdropPress={this.handlePressBackdrop}
      handleFillNowButton={this.handleFillNowButton} handleLaterButton={this.handleLaterButton}
      button1="Fill Now" button2="Later"/>
        <LoginInput text='First Name'/>
        <LoginInput text='Last Name'/>
      </Container>
    );
  }
}
export default Signup2;
