import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import styles from './styles'

export default class CharityInfoHeader extends Component {
  render() {
    return (
            <View style={styles.Container}>
              <Text style={styles.charityName}>{this.props.charityData.charityName}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.locationPreText}>Headquarters: </Text>
                <Text style={styles.location}>{this.props.charityData.charityCity}, {this.props.charityData.charityState}</Text>
              </View>
              <Image resizeMode= 'contain' source={{uri:this.props.charityData.charityImageURL}} style={styles.charityImage} />
              <Text style={styles.aboutHolderText}>About</Text>
              <Text style={styles.charityAbout}>{this.props.charityData.charityAbout}</Text>
              <View style={styles.charityNavigatorDetails}>
                <Text style={styles.charityNavigatorDetailsHeader}>Additional Information about the charity:</Text>
                <Text style={styles.charityNavigator1}>Type: {this.props.charityData.charityType}</Text>
                <Text style={styles.charityNavigator2}>Charity Navigator Overall Score: {this.props.charityData.charityNavigatorScore}</Text>
                <Text style={styles.charityNavigator3}>Tax Deductibility: {this.props.charityData.deductibility}</Text>
              </View>
              <Text style={styles.numDonations}>{this.props.charityData.numDonations} donors have contributed to this charity</Text>
              <View style={styles.updateSeparator} />
              <Text style={styles.driveListHeader}>{this.props.charityData.charityName}'s drives:</Text>
            </View>
    );
  }
}
