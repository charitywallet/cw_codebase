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

  constructor(props) {
    super(props);
    console.log("inside constructor")
    this.state = {
      // isLoading: true,
      // search: '',
      //user_id: this.props.user_id,
      drives_added_by_user: false,
      dataSource: [],
      initialState: true,
      count: 0,
      // dummy: false
    };
  }

  componentWillMount(){
    console.log("mounted");
    console.log("##########");
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/get_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.navigation.getParam('user_id', '3'),
      my_drives: 1,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        this.setState({
          drives_added_by_user: false,
          dataSource: data.drives,
          initialState: false,
          count: this.state.count+1,
        },
      )
      //this.forceUpdate();
        // console.log("datasource inside mount", this.state.dataSource);
      } else {
        console.log("error inside mount", data)
        this.setState({
          initialState: false,
        },
      )
          //alert(data.message); //TODO: Network error component
        }
      }
    )
    .catch((error) => {
      alert(error)
    });
    // console.log("data source mounting", this.state.dataSource);
    //console.log("userId mounting", this.props.navigation.getParam('userId', '3'));
    // this.setState(() =>)
  }


  onChangeTab() {
    //console.log("On change tab");
    this.setState({
      dummy: false,
    })
  }

  funcDrivesMain = (drivesAdded) => {
    // if (drivesAdded === true) {
    //
    // }
    // console.log("drives added in drives main.js", drivesAdded);
    this.setState({
      drives_added_by_user: true,
    }, () => console.log("func drives main", this.state.drives_added_by_user))

  }
  shouldComponentUpdate(nextProps, nextState){
    //console.log("inside componentShouldUpdate")
    // console.log("inside componentShouldUpdate nextstate", nextState)
    // console.log("inside componentShouldUpdate this state", this.state)
    if ((nextState.drives_added_by_user ===  true) || (this.state.initialState === true)){

      // this.setState({
      //   count: this.state.count+1,
      // })
      console.log("inside true")
      return true;
    }
    return false;

  }
  componentWillUpdate(nextProps, nextState){
    console.log("will update");
    console.log("##########");
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/get_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.navigation.getParam('user_id', '3'),
      my_drives: 1,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {

        this.setState((state, props) => ({
          dummy: false,
          drives_added_by_user: false,
          dataSource: data.drives,
          initialState: false,
          count: state.count+1,
        })
        // function() {
        //   this.arrayholder = data.drives;
        // }
      );
      // console.log("data inside update", this.state.dataSource)
      // console.log("data inside update nextstate", nextState.dataSource);
        //console.log("data", this.state.dataSource);
      } else {
          console.log("error inside update", data)
          //alert(data.message); //TODO: Network error component
        }
      }
    )
    .catch((error) => {
      alert(error)
    });

    // this.setState(() =>)
  }

  componentDidUpdate(nextProps, nextState){
    console.log("did update");
    console.log("##########");
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/get_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.navigation.getParam('user_id', '3'),
      my_drives: 1,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        //console.log("did update", this.state.dataSource)
        this.setState((state, props) => ({
          dummy: false,
          drives_added_by_user: false,
          dataSource: data.drives,
          initialState: false,
          count: state.count+1,
        })
      )
      // console.log("data inside did update", this.state.dataSource)
      // console.log("data inside did update nextstate", nextState.dataSource);
        //console.log("data", this.state.dataSource);
      } else {
          console.log("error inside update", data)
          //alert(data.message); //TODO: Network error component
        }
      }
    )
    .catch((error) => {
      alert(error)
    });

    // this.setState(() =>)
  }


  funcDrivesMainDisable = (drivesAdded) => {
    this.setState({
      drives_added_by_user: false,
    })
    console.log("##########");
  }

  componentWillUnmount(){
    console.log("unkount in drives main");
  }
  render() {
    const { navigation } = this.props;
    const user_id = navigation.getParam('user_id', '3'); //TODO: Change the default user id
    return (
      <Container>
      <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabHeading}>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>All Drives</Text></TabHeading>}>
            <Drives navigation={this.props.navigation} user_id={user_id} funcDrivesMain={this.funcDrivesMain}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>All Charities</Text></TabHeading>}>
            <CharityList navigation={this.props.navigation} user_id={user_id}/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabText}>Supported Drives</Text></TabHeading>} onPress={()=>console.log("PRESSED")}>
            <SupportedDrives navigation={this.props.navigation} user_id={user_id}
            drives_added_by_user = {this.state.drives_added_by_user} funcDrivesMainDisable={this.funcDrivesMainDisable}
            dummy={this.state.dummy} drives_data={this.state.dataSource} count={this.state.count}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
