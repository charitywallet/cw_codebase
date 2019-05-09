import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'

import { Input, Button, SocialIcon } from 'react-native-elements';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  signUp: {
    paddingTop: 15,
  },
  orText: {
    color: '$textColor',
    paddingTop: 10,
    paddingBottom: 8,
    fontWeight: 'bold'
  },
  socialContainer: {
    width: imageWidth/1.5,
  },
});

class Signup extends Component {

  state = {
    email: '',
    password: '',
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

    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    // if(reg.test(this.state.email) === false) {
    //   alert("Please enter a valid Email ID.");
    //   return
    // }

    const { email, password } = this.state;

    // Function to process the response we get from API - done to retrieve status code
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/signup', {
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
        //console.log("data",data.user_id);
        this.props.navigation.navigate('UserSignup2', {user_id: data.user_id})
      } else {
        alert();
      }
    })
    .catch((error) => {
      // console.error(error);
      // console.log(message)
    });;
  }

  render() {
    const {navigate} = this.props.navigation;
    const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;

    return(
      <Container>
        <Logo/>
        <LoginInput text='Email' onChangeText={email => this.setState({ email })}
              value={this.state.email} autoCapitalize='none'/>
        <LoginInput text='Password' onChangeText={password => this.setState({ password })}
              value={this.state.password} autoCapitalize='none'/>
        <View style={styles.signUp}>
          <LoginButton text='Sign Up' onPress={ () => this.onPressSignIn() } disabled={!isEnabled}/>
        </View>
        <Text style={styles.orText}>────────   Or   ────────</Text>
        <View style={styles.socialContainer}>
          <SocialIcon title='Sign In With Facebook' button type='facebook'/>
        </View>
        <Text style={styles.newUser} onPress={() => navigate('UserSignup2')}>Developer Sign Up.</Text>
      </Container>
    );
  }
}
export default Signup;

        // <LoginInput text='Re-enter Password'/>
        // onPress = {() => navigate('UserSignup2')}
