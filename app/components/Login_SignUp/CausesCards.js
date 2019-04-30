import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Input, Card } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';


import styles from './styles';

export default class CausesCards extends Component {
  onPressCard = (name) => {
    console.log("Item selected 1", name);
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.onPressCard(this.props.cause.causeName)}>
        <Card containerStyle={styles.cardContainer} title ={this.props.cause.causeName} titleStyle={styles.titleStyle}
        wrapperStyle={styles.wrapper}>
          <View style={styles.imageContainer}>
            <SvgUri
            width="45"
            height="45"
            fill = "#F0F0F0"
            source={this.props.cause.causeImageURL}
            />
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
};


// image={require('./images/animals.png')}>
// <Text> {this.props.causeName} </Text>
