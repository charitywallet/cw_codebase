import React, {Component} from 'react';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {Container} from '../components/Container';

import { Input, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  first: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 200,
  },
});

class Login extends Component {


  render() {
    return (
      <Container>
        <View style={styles.first}>
          <Input placeholder='Email'/>
        </View>
        <View style={styles.first}>
          <Input placeholder='Password'/>
        </View>
        <Button title = 'Login'/>
      </Container>
    );
  }
}
export default Login;
