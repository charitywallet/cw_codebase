import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import Dashboard_1 from './Dashboard_1';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left/>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right /></Header>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Overview</Text></TabHeading>}>
            <Dashboard_1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Charity Feed</Text></TabHeading>}>
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
