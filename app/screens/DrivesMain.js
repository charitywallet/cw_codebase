import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import {MyFooter} from '../components/MyFooter';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
import {CharityList} from '../components/CharityTabComponents/CharityList';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Drives</Text></TabHeading>}>
            <Drives />
          </Tab>
          <Tab heading={ <TabHeading><Text>Charities</Text></TabHeading>}>
            <CharityList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
