import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Text , Left, Body, Right, Title } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import CharityFeed from './CharityFeed';
import Drives from './Drives';
import SupportedDrives from './SupportedDrives';
import {CharityList} from '../components/CharityTabComponents/CharityList';
import { connect } from 'react-redux'

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

//export default class TabsAdvancedExample extends Component
class TabsAdvancedExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
      // search: '',
      // user_id: this.props.user_id,
      drives_added_by_user: false,
      // dummy: false
    };
  }

  // onChangeTab() {
  //   //console.log("On change tab");
  //   this.setState({
  //     dummy: false,
  //   })
  // }
  //
  // funcDrivesMain = (drivesAdded) => {
  //   // if (drivesAdded === true) {
  //   //
  //   // }
  //   console.log("drives added", drivesAdded);
  //   this.setState({
  //     drives_added_by_user: true,
  //   }, () => console.log("func drives main", this.state.drives_added_by_user))
  //
  // }
  //
  // funcDrivesMainDisable = (drivesAdded) => {
  //   this.setState({
  //     drives_added_by_user: false,
  //   }, () => console.log("func dtives main disable", this.state.drives_added_by_user))
  //
  // }

  render() {
    const { navigation } = this.props;
    const user_id = navigation.getParam('user_id', '1'); //TODO: Change the default user id
    return (
      <Container>
      <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabHeading}>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>All Drives</Text></TabHeading>}>
            <Drives navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>All Charities</Text></TabHeading>}>
            <CharityList navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>My Drives</Text></TabHeading>}>
            <SupportedDrives navigation={this.props.navigation} user_id={user_id}
            drives_added_by_user = {this.state.drives_added_by_user}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsAdvancedExample;
