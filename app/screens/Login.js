import React, {Component} from 'react';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  },
  text:{
    alignContent: 'flex-start',
    fontSize: 24,
  },
  first: {
    //alignContent: 'center',
    //justifyContent: 'center',
    height: 200,
    width: '80%',
    paddingBottom: 20
  },
});

class Login extends Component {


  render() {
    return (
      <Container>
          <Text style={styles.text}> Welcome to the Charity Wallet App</Text>
          <Input
            containerStyle={styles.first}
            label='Enter Email'
            placeholder='INPUT WITH CUSTOM ICON'
            leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
                    }
          />

          <Input containerStyle={styles.first} placeholder='Password'/>
          <Button title = 'Login' type= 'clear'/>
      </Container>
    );
  }
}
export default Login;
