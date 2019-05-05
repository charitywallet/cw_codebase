import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width -20)/2;

export default class DrivesCard extends Component {

  onPressDrive = (text) => {
    console.log(text,' is pressed');
    console.log("title", this.props.drive.driveTitle);
    this.props.navigation.navigate('DriveInformation', {title: this.props.drive.driveTitle});
    //TODO: Navigate to DriveInfo, send props to display data
    //TODO: fetch props through the following code:
    // const title = this.props.navigation.getParam('title', 'NO-title');
  }

  render() {
    return (
        <TouchableOpacity onPress= {() => this.onPressDrive(this.props.drive.driveTitle)}>
        <View style={styles.Container}>
          <Image resizeMode= 'contain' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />
          <Text style={styles.location}>{this.props.drive.driveCity}</Text>
          <Text numberOfLines={2} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
          {/*<Text numberOfLines={2} style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>*/}
          {/*ProgressBar component goes here*/}
          <ProgressBar
            progress={this.props.drive.percentCompleted}
            width= {imageWidth}
            color= '#92C7C7'
            borderColor= '#92C7C7'
          />
          <View style={styles.moneyRaised}>
            <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
            {/*<Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>*/}
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}
