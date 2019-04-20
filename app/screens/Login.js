import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'

import { Input, Button } from 'react-native-elements';

const textColor = '#92C7C7';

const styles = EStyleSheet.create({
  forgotPassword: {
    color: '$LoginScreenText',
    paddingLeft: 130,
    paddingTop: 5,
  },
  newUser:{
    color: '$LoginScreenText',
    alignItems: 'center',
    paddingTop: 20,
    fontSize: 20
  }
});

class Login extends Component {
  render() {
    return(
      <Container>
        <Logo/>
        <LoginInput text='Email'/>
        <LoginInput text='Password'/>
        <Text style={styles.forgotPassword}> Forgot Password</Text>
        <LoginButton text='Login'/>
        <Text style={styles.newUser}> New User? SIGN UP.</Text>
      </Container>
    );
  }
}
export default Login;
