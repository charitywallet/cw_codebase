import React, {Component} from 'react';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput} from '../components/Input'

import { Input, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  first: {
    width: "70%",
  },
});

class Login extends Component {
  render() {
    return(
      <Container>
        <Logo/>
        <LoginInput text='Email'/>
        <LoginInput text='Password'/>
        <Button title = 'Login'/>
      </Container>
    );
  }
}
export default Login;
