import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Button, Icon } from 'native-base';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles'

export default class CharityFeedCard2 extends Component {
  render() {
    return (
      <Card style={{marginTop:0}}>
        <CardTitle
          avatarSource={{uri:this.props.charity.charityImageURL}}
          title={this.props.charity.charityName}
          subtitle={this.props.charity.updateDate}
         />
        <CardImage
          source={{uri:this.props.charity.feedImageURL}}
        />
        <View style={styles.driveNameContainer}>
          <Text style={styles.driveName}>{this.props.charity.driveTitle}</Text>
        </View>
       <CardContent style={{fontFamily: 'Avenir'}}
       text={this.props.charity.feedMessage}
        />
        <CardAction
          separator={true}
          inColumn={false}>
          <Icon
            name="rose"
            style={styles.Icon} />
          <Text style={styles.footerText}>{this.props.charity.numDonations} people have donated till now</Text>
        </CardAction>
      </Card>
    );
  }
}
