import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import HorizontalCarousel from "@rhysforyou/react-native-carousel";
import styles from './styles';
import {Icon} from 'react-native-elements';

const backgroundImageLink = './image/background.jpg'

const MOCK_DATA = [
  {
    id: "1",
    cardTitle: "Lifetime Donations!",
    cardAmount: "$1234.56",
    cardMessage: "Congrats! Way to go..."
  },
  {
    id: "2",
    cardTitle: "Charities Supported",
    cardAmount: "12",
    cardMessage: "You da MVP!"
  },
  {
    id: "3",
    cardTitle: "Charities Supported",
    cardAmount: "12",
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

const Carousel = () => {
    return(
      <View>
        <HorizontalCarousel
          style={styles.carousel}
          data={MOCK_DATA}
          renderItem={info => (
            <View>
              <ImageBackground source={require(backgroundImageLink)} style={styles.backgroundImage}>
              <Icon name='dollar' type='font-awesome' size={50} color= 'blue'/>
              <View style={styles.textView}>
                  <Text style={styles.cardMessage}>{info.item.cardMessage}</Text>
                  <Text style={styles.cardAmount}>{info.item.cardAmount}</Text>
                  <Text style={styles.cardTitle}>{info.item.cardTitle}</Text>
              </View>
              </ImageBackground>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
};

// Carousel.propTypes = {
//   carousel_data: PropTypes.object,
// };

export default Carousel;
