import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet, ActivityIndicator} from 'react-native';
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
    error: '',
    authenticating: false,
  }

  render() {
    if(this.state.authenticating){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }

    const {navigate} = this.props.navigation;
    return(
      <Container>
        <Logo/>
        <LoginInput text='Email' onChangeText={email => this.setState({ email })}
              value={this.state.email}/>
        <LoginInput text='Password' onChangeText={password => this.setState({ password })}
              value={this.state.password}/>
        <Text style={styles.forgotPassword} onPress={() => this.onPressForgotPassword()}> Forgot Password</Text>
        <LoginButton text='Login' onPress={() => this.onPressSignIn()}/>
        <Text style={styles.newUser} onPress={() => navigate('UserSignup')}> New User? SIGN UP.</Text>
        <Text style={styles.newUser} onPress={() => navigate('UserDashboard')}>Developer Sign in.</Text>
      </Container>
    );
  }
}

export default Login;
