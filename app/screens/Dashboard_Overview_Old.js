import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import HorizontalCarousel from '@rhysforyou/react-native-carousel';
import {CurrentAmountCard} from '../components/DashboardComponents/CurrentAmountCard';
import {Card1} from '../components/DashboardComponents/OverviewCarouselCards';
import { Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

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

const backgroundImageLink = '../components/DashboardComponents/OverviewCarouselCards/image/background.jpg'
class Dashboard_Overview extends Component {

  render() {
    return(
      <View style={styles.container}>
      <CurrentAmountCard/>
      <HorizontalCarousel
        style={styles.carousel}
        data={MOCK_DATA}
        renderItem={info => (
          <View>
            <ImageBackground source={require(backgroundImageLink)} style={{width: '100%', height: '100%'}}>
            <Icon
              name='dollar'
              type='font-awesome'
              size={50}
              color= 'blue'
              />
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
    );
  }
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray"
  },
  carousel: {
    maxHeight: 350,
    maxWidth: "100%",
  },
  textView: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
  },
  cardAmount: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  cardMessage: {
    fontSize: 17,
    fontWeight: "normal",
    color: "#666",
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
});


export default Dashboard_Overview;
