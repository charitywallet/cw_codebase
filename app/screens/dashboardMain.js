import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import Dashboard_1 from './Dashboard_1';
import {MyFooter} from '../components/MyFooter';
import CharityFeed from './CharityFeed';
import CharityInformation from './CharityInformation'
import Drives from './Drives';
import {View} from 'react-native';
//import {DriveInfo} from '../components/CharityTabComponents/DriveInfo';

const data=
  {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
, driveLocation: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
, driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
, currentMoney: '450'
, targetMoney: '2000'
, percentCompleted: 0.8
, charityName: 'Pokemon Squad', numDonations: '30'}

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Tabs initialPage={0}
        tabBarUnderlineStyle={{backgroundColor:'#6FACB4', borderRadius : .1, borderStyle: 'dashed', borderWidth: .1, height: 2,}}>
          <Tab heading={ <TabHeading><Text style={{color:'#6FACB4'}}>Charity Feed</Text></TabHeading>}>
            <CharityFeed />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#6FACB4'}}>Overview</Text></TabHeading>}>
            <Dashboard_1 />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#6FACB4'}}>Charity Information</Text></TabHeading>}>
            <CharityInformation/>
          </Tab>
        </Tabs>
        </Container>
    );
  }
}

// <Tab heading={ <TabHeading><Text>Awards</Text></TabHeading>}>
//   <DriveInfo drive={data}/>
