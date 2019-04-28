import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Tile } from 'react-native-elements';
import styles from './styles'

const Card1 = () => {
  return (
    <View style={styles.container}>
    <Tile
      imageSrc={require('./image/background.jpg')}
      title="$2,324,343"
      titleStyle={styles.values}
      featured
      caption="Your Lifetime Donations"
      containerStyle= {styles.container_tile}
      />
    </View>
  );
};

export default Card1;
