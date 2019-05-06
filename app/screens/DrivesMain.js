import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
import SupportedDrives from './SupportedDrives';
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
  state = {
    dummy: false
    //user_id = this.props.navigation.getParam('userId', '3');
  }
  onChangeTab() {
    //console.log("On change tab");
    // this.setState({
    //   dummy: false,
    // })
  }

  render() {
    const { navigation } = this.props;
    const user_id = navigation.getParam('userId', '3'); //TODO: Change the default user id
    return (
      <Container>
      <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabHeading} onChangeTab={() => this.onChangeTab()}>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>All Drives</Text></TabHeading>}>
            <Drives navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>All Charities</Text></TabHeading>}>
            <CharityList navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>My Drives</Text></TabHeading>}>
            <SupportedDrives navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
