import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width);

export default class DriveInfoHeader extends Component {
  render() {
    return (
            <View style={styles.Container}>
              <Text style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
              <Text style={styles.charityName}>by: {this.props.drive.charityName}</Text>
              <Text style={styles.location}>{this.props.drive.driveCity}, {this.props.drive.driveState}</Text>
              <Image resizeMode= 'contain' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />
              <View style={styles.progressBar}>
                <Text style={styles.driveProgressText}>Drive Progress:</Text>
                <ProgressBar
                  progress={this.props.drive.percentCompleted}
                  width= {imageWidth - imageWidth/10}
                  color= '#92C7C7'
                  borderColor= '#92C7C7'
                />
                <View style={styles.moneyRaised}>
                  <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
                  <Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>
                </View>
              </View>
              <Text style={styles.driveAboutTitle}>About:</Text>
              <Text style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>
              <View style={styles.charityNavigatorDetails}>
                <Text style={styles.charityNavigatorDetailsHeader}>Additional Information about the charity:</Text>
                <Text style={styles.charityNavigator1}>Type: {this.props.drive.charityType}</Text>
                <Text style={styles.charityNavigator2}>Charity Navigator Overall Score: {this.props.drive.charityNavigatorScore}</Text>
                <Text style={styles.charityNavigator3}>Tax Deductibility: {this.props.drive.deductibility}</Text>
              </View>
              <Text style={styles.numDonations}>{this.props.drive.numDonations} donors have contributed to this drive</Text>
              <View style={styles.updateSeparator} />
              <Text style={styles.driveUpdatesHeader}>Drive Updates</Text>
            </View>
          );
        }
      }
