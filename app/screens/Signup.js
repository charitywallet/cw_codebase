import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'

import { Input, Button, SocialIcon } from 'react-native-elements';


const textColor = '#92C7C7';
const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  signUp: {
    paddingTop: 15,
  },
  orText: {
    color: textColor,
    paddingTop: 10,
    paddingBottom: 8,
    fontWeight: 'bold'
  },
  socialContainer: {
    //height: '20%',
    width:imageWidth/1.5,
  },
});

class Login extends Component {
  render() {
    return(
      <Container>
        <Logo/>
        <LoginInput text='Email'/>
        <LoginInput text='Password'/>
        <LoginInput text='Re-enter Password'/>
        <View style={styles.signUp}>
          <LoginButton text='Sign Up'/>
        </View>
        <Text style={styles.orText}>────────   Or   ────────</Text>
        <View style={styles.socialContainer}>
          <SocialIcon title='Sign In With Facebook' button type='facebook'/>
        </View>
      </Container>
    );
  }
}
export default Login;
