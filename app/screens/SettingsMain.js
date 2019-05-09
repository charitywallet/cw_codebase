import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Cards from './Cards';
import Limits from './Limits'
import AppSettings from './AppSettings'
import {View} from 'react-native';
//import {DriveInfo} from '../components/CharityTabComponents/DriveInfo';

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
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Cards</Text></TabHeading>}>
            <Cards />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Limits</Text></TabHeading>}>
            <Limits/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>App Settings</Text></TabHeading>}>
            <AppSettings/>
          </Tab>
        </Tabs>
        </Container>
    );
  }
}
