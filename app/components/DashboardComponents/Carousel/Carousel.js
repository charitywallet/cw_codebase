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
var MOCK_DATA = []
  if (lifetime_total === 0){
  MOCK_DATA = [
    {
      id: "1",
      cardTitle: "You signed up for a good cause. Donate more to increase your lifetime donations which are",
      cardAmount: '$'+lifetime_total,
      cardMessage: "Congrats! Way to go!"
    }]} else {
      MOCK_DATA = [
        {
          id: "1",
          cardTitle: "Your lifetime donations through the app are",
          cardAmount: '$'+lifetime_total,
          cardMessage: "Congrats! Way to go!"
        }]
    }

    if (active_drives === 0){
      MOCK_DATA = MOCK_DATA.concat(
        {
          id: "2",
          cardTitle: "Select more drives to see the number of drives supported by you!",
          cardAmount: active_drives,
          cardMessage: "Support more drives!"
        }
      )
    } else {
      MOCK_DATA = MOCK_DATA.concat(
        {
          id: "2",
          cardTitle: "For making a difference in the world by supporting so many drives!",
          cardAmount: active_drives,
          cardMessage: "Thank you!"
        }
      )
    }

    if (active_charities === 0){
      MOCK_DATA = MOCK_DATA.concat(
        {
          id: "3",
          cardTitle: "Select more drives to see the number of charities supported by you!",
          cardAmount: active_drives,
          cardMessage: "Give love to more charities!"
        }
      )
    } else {
      MOCK_DATA = MOCK_DATA.concat(
        {
          id: "3",
          cardTitle: "The number of charities supported by you are",
          cardAmount: active_charities,
          cardMessage: "Amazing work!"
        }
      )
    }

  // else {
  // MOCK_DATA = [
  //   {
  //     id: "1",
  //     cardTitle: "Your lifetime donations through the app are",
  //     cardAmount: '$'+lifetime_total,
  //     cardMessage: "Congrats! Way to go!"
  //   },
  //   {
  //     id: "2",
  //     cardTitle: "For making a difference in the world by supporting so many drives!",
  //     cardAmount: active_drives,
  //     cardMessage: "Thank you!"
  //   },
  //   {
  //     id: "3",
  //     cardTitle: "The number of charities supported by you are",
  //     cardAmount: active_charities,
  //     cardMessage: "Amazing work!"
  //   },
  // ];}

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

// <LinearGradient
// colors={['rgba(69,150,160,0.9)', 'rgba(40,140,90,0.7)']}
// style={{
// position: 'absolute',
// left: 0,
// right: 0,
// top: 0,
// height: 350,
// }}
// />
