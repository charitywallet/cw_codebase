import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import { Text, Image, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Input, Card } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';


import styles from './styles';

const CausesChosen = []

export default class CausesCards extends Component {

  state = {
    selected: true, //don't know why reverse works
   }

  onPressCard = (name) => {
    this.setState( prevState => ({
      selected: !prevState.selected
    }));
    var alreadyExists = CausesChosen.includes(name);
    if (alreadyExists) {
      CausesChosen.splice(CausesChosen.indexOf(name), 1);
    } else {
      CausesChosen.push( name );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.onPressCard(this.props.cause.causeName)} activeOpacity = {.9}
        style = {[styles.TouchableHighlightContainer, this.state.selected ? {}: {backgroundColor: 'rgba(0,0,0,1)'}]}>
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
        </TouchableHighlight>
      </View>
    );
  };
};


// image={require('./images/animals.png')}>
// <Text> {this.props.causeName} </Text>
          // <View style={styles.imageContainer}>
