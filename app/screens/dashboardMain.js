import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import Dashboard_1 from './Dashboard_1';
import EStyleSheet from 'react-native-extended-stylesheet';
import CharityFeed from './CharityFeed';
import CharityInformation from './CharityInformation'
import DriveInformation from './DriveInformation'
import DrivesMain from './DrivesMain';
import AnimationTry from './AnimationTry';
import Drives from './Drives';
import {View} from 'react-native';
//import {DriveInfo} from '../components/CharityTabComponents/DriveInfo';

// const data=
//   {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
// , driveLocation: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.8
// , charityName: 'Pokemon Squad', numDonations: '30'}

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
    const user_id = navigation.getParam('user_id', '1');
    return (
      <Container>
        <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabHeading}>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Overview</Text></TabHeading>}>
            <Dashboard_1 user_id={user_id} navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Charity Feed</Text></TabHeading>}>
            <CharityFeed user_id={user_id} navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
        </Container>
    );
  }
}

// <Tab heading={ <TabHeading><Text>Awards</Text></TabHeading>}>
//   <DriveInfo drive={data}/>
