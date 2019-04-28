import React, { Component } from 'react';
import {Text} from 'react-native';
import { Button, Icon } from 'native-base';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles'

export default class DefaultCharityFeedCard extends Component {
  render() {
    return (
      <Card>
        <CardTitle
          title= "This is the default card"
          subtitle="This is still the deafult card"
         />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Add more Charities..."
            color="blue"
          />
        </CardAction>
      </Card>
    );
  }
}
