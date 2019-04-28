import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles'
import moment from "moment";

var currentDate = new Date();
const formattedDate = moment(currentDate).format("MMMM D, YYYY");
const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getYear();
const AmountTillNow = '42.42'

const CurrentAmountCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{ formattedDate }</Text>
      <Text style={styles.amount}>${ AmountTillNow }</Text>
      <Text style={styles.bottomText}>collected till now...</Text>
      <View style={styles.buttonContainer}>
          <Button
          title= 'Donate Now'
          buttonStyle= {styles.buttonStyle}/>
          <Button
          title= 'Donate Custom Amount'
          buttonStyle= {styles.buttonStyle}/>
      </View>
    </View>
  )
};

export default CurrentAmountCard;
