import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import styles from './styles'
export default class CharityFeedCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Thumbnail source={this.props.charity.charityImageURL} />
                <Body>
                  <Text>{this.props.charity.charityName}</Text>
                  <Text note>{this.props.charity.updateDate}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={this.props.charity.feedImageURL} style={styles.feedImage}/>
                <Text>
                  {this.props.charity.feedMessage}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="rose" />
                  <Text>{this.props.charity.numDonations} people have donated till now</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
