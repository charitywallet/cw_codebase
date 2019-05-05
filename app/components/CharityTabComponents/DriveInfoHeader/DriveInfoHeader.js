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
              <Text style={styles.charityName}>{this.props.drive.charityName}</Text>
              <Image resizeMode= 'stretch' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />
              <Text numberOfLines={2} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{this.props.drive.driveCity}, </Text>
                <Text style={styles.location}>{this.props.drive.driveState}</Text>
              </View>
              <ProgressBar
                progress={this.props.drive.percentCompleted}
                width= {imageWidth}
                color= '#92C7C7'
                borderColor= '#92C7C7'
              />
              <View style={styles.moneyRaised}>
                <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
                <Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>
              </View>
              <Text style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>
              <Text style={styles.numDonations}>{this.props.drive.numDonations} donations have been made to this drive so far.</Text>
              <Text style={styles.driveUpdatesHeader}>Updates for this drive till now...</Text>
            </View>
          );
        }
      }
