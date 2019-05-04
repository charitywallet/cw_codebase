import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import HorizontalCarousel from "@rhysforyou/react-native-carousel";
import styles from './styles';
import {Icon} from 'react-native-elements';

const backgroundImageLink = './image/background.jpg'

const Carousel = ({
  lifetime_total,
  active_charities,
  active_drives
}) => {

  const MOCK_DATA = [
    {
      id: "1",
      cardTitle: "Your lifetime donations through the app are",
      cardAmount: lifetime_total,
      cardMessage: "Congrats! Way to go..."
    },
    {
      id: "2",
      cardTitle: "Drives Supported",
      cardAmount: active_drives,
      cardMessage: "You da MVP!"
    },
    {
      id: "3",
      cardTitle: "Charities Supported",
      cardAmount: active_charities,
      cardMessage: "You da MVP!"
    },
    {
      id: "4",
      cardTitle: "Charities Supported",
      cardAmount: "12",
      cardMessage: "You da MVP!"
    },
    {
      id: "5",
      cardTitle: "Charities Supported",
      cardAmount: "12",
      cardMessage: "You da MVP!"
    },
  ];

    return(
      <View>
        <HorizontalCarousel
          style={styles.carousel}
          data={MOCK_DATA}
          renderItem={info => (
            <View>
              <View style={styles.textView}>
                  <Text style={styles.cardMessage}>{info.item.cardMessage}</Text>
                  <Text style={styles.cardTitle}>{info.item.cardTitle}</Text>
                  <Text style={styles.cardAmount}>{info.item.cardAmount}</Text>

              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
};

Carousel.propTypes = {
  lifetime_total: PropTypes.any,
  active_charities: PropTypes.any,
  active_drives: PropTypes.any,
};

export default Carousel;

//
// <ImageBackground source={require(backgroundImageLink)} style={styles.backgroundImage}>
// <Icon name='dollar' type='font-awesome' size={50} color= 'blue'/>
// <View style={styles.textView}>
//     <Text style={styles.cardMessage}>{info.item.cardMessage}</Text>
//     <Text style={styles.cardAmount}>{info.item.cardAmount}</Text>
//     <Text style={styles.cardTitle}>{info.item.cardTitle}</Text>
// </View>
// </ImageBackground>
