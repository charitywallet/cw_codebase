import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import Dashboard_1 from './Dashboard_1';
import {MyFooter} from '../components/MyFooter';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
import {DriveInfo} from '../components/CharityTabComponents/DriveInfo';

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
        <Tabs>
          <Tab heading={ <TabHeading><Text>Charity Feed</Text></TabHeading>}>
            <CharityFeed />
          </Tab>
          <Tab heading={ <TabHeading><Text>Overview</Text></TabHeading>}>
            <Dashboard_1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Awards</Text></TabHeading>}>
            <DriveInfo drive={data}/>
          </Tab>
        </Tabs>
        <MyFooter navigation={this.props.navigation}/>
      </Container>
    );
  }
}
