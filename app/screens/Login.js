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
    fontFamily: '$textFont'
  },
  newUser:{
    color: '$LoginScreenText',
    alignItems: 'center',
    paddingTop: 20,
    fontSize: 20,
    fontFamily: '$textFont'
  }
});

class Login extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    authenticating: false,
  }

  onPressSignIn() {
    if (this.state.email == ''){
      alert("Please enter a valid Email ID.")
      return
    }
    if (this.state.password == ''){
      alert("Please enter a valid Password.")
      return
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(this.state.email) === false) {
      alert("Please enter a valid Email ID.");
      return
    }

    this.setState({
     authenticating: true,
    });

    const { email, password } = this.state;

    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        console.log("data",data.user_id);
        this.props.navigation.navigate('UserDashboard', {user_id: data.user_id, sourcePage: 'Login'})
      } else {
        alert(data.message);
      }
      this.setState({
        authenticating: false,
      });
    })
    .catch((error) => {
      alert(error)
      this.setState({
        authenticating: false,
      });
    });
  }

  onPressForgotPassword() {
    alert("Please check your inbox to recover your password.")
  }

  render() {
    const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;

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
              value={this.state.email} autoCapitalize='none'/>
        <LoginInput text='Password' onChangeText={password => this.setState({ password })}
              value={this.state.password} autoCapitalize='none' secureTextEntry={true}/>
        <Text style={styles.forgotPassword} onPress={() => this.onPressForgotPassword()}> Forgot Password</Text>
        <LoginButton text='Login' onPress={() => this.onPressSignIn()} disabled={!isEnabled}/>
        <Text style={styles.newUser} onPress={() => navigate('UserSignup')}>New User? SIGN UP.</Text>
      </Container>
    );
  }
}

export default Login;
