import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
import {CharityList} from '../components/CharityTabComponents/CharityList';


const styles = EStyleSheet.create({
  tabHeading: {
    backgroundColor:'$primaryBlue',
    borderRadius : .1,
    borderStyle: 'dashed',
    borderWidth: .1,
    height: 2,
  },
  tabText: {
    color:'$primaryBlue',
  },
});

export default class TabsAdvancedExample extends Component {
  render() {
    const { navigation } = this.props;
    const user_id = navigation.getParam('userId', '3');
    return (
      <Container>
      <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabHeading}>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Drives</Text></TabHeading>}>
            <Drives navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Charities</Text></TabHeading>}>
            <CharityList navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
