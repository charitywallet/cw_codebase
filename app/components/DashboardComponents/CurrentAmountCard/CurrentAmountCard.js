import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles'

const Date1 = new Date().getDate()//'April, 2019';
const AmountTillNow = '42.42'

const CurrentAmountCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{ Date1 }</Text>
      <Text style={styles.amount}>${ AmountTillNow }</Text>
      <Text style={styles.bottomText}>collected till now...</Text>
      <View style={styles.buttonContainer}>
          <Button
          title= 'Donate             Now'
          buttonStyle= {styles.buttonStyle}/>
          <Button
          title= 'Donate              Custom Amount'
          buttonStyle= {styles.buttonStyle}/>
      </View>
    </View>
  )
};

export default CurrentAmountCard;
