import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Carousel} from '../components/DashboardComponents/Carousel'
import {CurrentAmountCard} from '../components/DashboardComponents/CurrentAmountCard';

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
