import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import styles from './styles';
const Logo = () => (
  <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require('./images/charity.png')}/>
    <Text style={styles.text}> Charity Wallet </Text>
  </View> //view so that we are just returning 1 component
);

export default Logo;
