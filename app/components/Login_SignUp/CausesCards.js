import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import { Text, Image, View } from 'react-native';
import { Input, Card } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';


import styles from './styles';

export default class CausesCards extends Component {
  render() {
    return (
      <Card containerStyle={styles.cardContainer} title ={this.props.cause.causeName} titleStyle={styles.titleStyle}>
        <View style={styles.imageContainer}>
          <SvgUri
          width="45"
          height="45"
          fill = "#F0F0F0"
          source={this.props.cause.causeImageURL}
          />
        </View>
      </Card>
    );
  };
};


// image={require('./images/animals.png')}>
// <Text> {this.props.causeName} </Text>
