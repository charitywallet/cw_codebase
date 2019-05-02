import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import Dashboard_1 from './Dashboard_1';
import {MyFooter} from '../components/MyFooter';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
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
            <Dashboard_1 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
