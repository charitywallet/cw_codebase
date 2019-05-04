import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Carousel} from '../components/DashboardComponents/Carousel'
import {CurrentAmountCard} from '../components/DashboardComponents/CurrentAmountCard';

//This data can either be fetched again from backend, or just passed onPress from Drives.js
const driveData=
  {
    driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
  , driveLocation: 'Berkeley, CA'
  , driveTitle: 'Help Detective Pikachu'
  , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
  , currentMoney: '450'
  , targetMoney: '2000'
  , percentCompleted: 0.8
  , charityName: 'Pokemon Squad'
  , numDonations: '30'
  }




class Dashboard_1 extends Component {

  render() {
    return(
      <View style={styles.container}>
      <CurrentAmountCard/>
      <Carousel/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "pink"
  },
});


export default Dashboard_1;
