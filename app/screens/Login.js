import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'

import { Input, Button } from 'react-native-elements';


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
    const {navigate} = this.props.navigation;
    return(
      <Container>
        <Logo/>
        <LoginInput text='Email'/>
        <LoginInput text='Password'/>
        <Text style={styles.forgotPassword}> Forgot Password</Text>
        <LoginButton text='Login' onPress = {() => navigate('UserDashboard')}/>
        <Text style={styles.newUser} onPress={() => navigate('UserSignup')}> New User? SIGN UP.</Text>
      </Container>
    );
  }
}

export default Login;
