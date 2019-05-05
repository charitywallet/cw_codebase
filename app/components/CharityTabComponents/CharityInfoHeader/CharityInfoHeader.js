import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import styles from './styles'

export default class CharityInfoHeader extends Component {
  render() {
    return (
            <View style={styles.Container}>
              <Text style={styles.charityName}>{this.props.charityData.charityName}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.locationPreText}>Headquartered at: </Text>
                <Text style={styles.location}>{this.props.charityData.charityCity}, </Text>
                <Text style={styles.location}>{this.props.charityData.charityState}</Text>
              </View>
              <Image resizeMode= 'stretch' source={{uri:this.props.charityData.charityImageURL}} style={styles.charityImage} />
              <Text style={styles.aboutHolderText}>About</Text>
              <Text style={styles.charityAbout}>{this.props.charityData.charityAbout}</Text>
              <Text style={styles.numDonations}>{this.props.charityData.numDonations} donations have been made to this charity so far.</Text>
              <Text style={styles.driveListHeader}>{this.props.charityData.charityName} has the following drives listed with us:</Text>
            </View>
    );
  }
}
