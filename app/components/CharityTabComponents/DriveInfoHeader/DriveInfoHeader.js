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
              <Image resizeMode= 'contain' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />
              <Text numberOfLines={2} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
              <Text style={styles.location}>{this.props.drive.driveCity}, {this.props.drive.driveState}</Text>
              <View style={styles.progressBar}>
                <ProgressBar
                  progress={this.props.drive.percentCompleted}
                  width= {imageWidth - imageWidth/4}
                  color= '#92C7C7'
                  borderColor= '#92C7C7'
                />
              </View>
              <View style={styles.moneyRaised}>
                <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
                <Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>
              </View>
              <Text style={styles.driveAboutTitle}>About:</Text>
              <Text style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>
              <Text style={styles.numDonations}>{this.props.drive.numDonations} donors have contributed to this drive</Text>
              <View style={styles.updateSeparator} />
              <Text style={styles.driveUpdatesHeader}>Drive Updates</Text>
            </View>
          );
        }
      }
