import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles'
import moment from "moment";

var currentDate = new Date();
const formattedDate = moment(currentDate).format("MMMM D, YYYY");
const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getYear();

const CurrentAmountCard = ({ month_total, onPressDonateNow, onPressDonateCustom }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{ formattedDate }</Text>
      <Text style={styles.amount}>${ month_total }</Text>
      <Text style={styles.bottomText}>collected this month</Text>
      <Text style={styles.smallText}>(your change will be donated automatically to your supported drives when it reaches $5,
        and at the end of the month.)</Text>
      <View style={styles.buttonContainer}>
          <Button raised
          title= 'Donate Now' onPress={onPressDonateNow}
          buttonStyle= {styles.buttonStyle} titleStyle={styles.buttonTextStyle}/>
          <Button raised
          title= 'Donate Custom Amount' onPress={onPressDonateCustom}
          buttonStyle= {styles.buttonStyle} titleStyle={styles.buttonTextStyle}/>
      </View>
    </View>
  )
};

CurrentAmountCard.propTypes = {
  month_total: PropTypes.any,
  onPressDonateNow: PropTypes.func,
  onPressDonateCustom: PropTypes.func,
};

export default CurrentAmountCard;
