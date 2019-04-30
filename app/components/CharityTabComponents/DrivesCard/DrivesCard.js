import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles'

export default class DrivesCard extends Component {
  render() {
    return (
        <View style={styles.Container}>
          <Image resizeMode= 'contain' source={this.props.drive.driveImageURL} style={styles.driveImage} />
          <Text style={styles.location}>{this.props.drive.driveLocation}</Text>
          <Text numberOfLines={2} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
          {/*<Text numberOfLines={2} style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>*/}
          {/*ProgressBar component goes here*/}
          <View style={styles.moneyRaised}>
            <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
            <Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>
          </View>
        </View>
    );
  }
}
// <Card>
//   <View style={styles.Container}>
//     <Image resizeMode= 'contain' source={this.props.drive.driveImageURL} style={styles.driveImage} />
//     <Text style={styles.location}>{this.props.drive.driveLocation}</Text>
//     <Text numberOfLines={1} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
//     <Text numberOfLines={2} style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>
//     //ProgressBar component goes here
//     <View style={styles.moneyRaised}>
//       <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
//       <Text style={styles.targetMoney}>of ${this.props.drive.targetMoney}</Text>
//     </View>
//   </View>
// </Card>
