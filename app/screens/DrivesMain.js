import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import Dashboard_1 from './Drives';
import {MyFooter} from '../components/MyFooter';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Drives</Text></TabHeading>}>
            <Drives />
          </Tab>
          <Tab heading={ <TabHeading><Text>Charities</Text></TabHeading>}>
            <Dashboard_1 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
