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

  state = {
    email: '',
    password: '',
    authenticating: false,
    user: null,
    error: '',
  }

  onPressSignIn() {
    if (this.state.email == ''){
      alert("Please enter a valid Email ID")
      return
    }
    if (this.state.password == ''){
      alert("Please enter a valid Password")
      return
    }
    this.setState({
      authenticating: true,
    });
    const { email, password } = this.state;
  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <Container>
        <Logo/>
        <LoginInput text='Email' onChangeText={email => {this.setState({ email }); console.log(this.state.email)}}
              value={this.state.email}/>
        <LoginInput text='Password' onChangeText={password => this.setState({ password })}
              value={this.state.password}/>
        <Text style={styles.forgotPassword}> Forgot Password</Text>
        <LoginButton text='Login' onPress={() => this.onPressSignIn()}/>
        <Text style={styles.newUser} onPress={() => navigate('UserSignup')}> New User? SIGN UP.</Text>
      </Container>
    );
  }
}

export default Login;
