import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {CharityFeedCard2} from 'app/components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from 'app/components/DashboardComponents/DefaultCharityFeedCard';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { Dimensions } from 'react-native';
import {DriveInfoHeader} from 'app/components/CharityTabComponents/DriveInfoHeader'


const imageWidth = (Dimensions.get('window').width);

class DriveInformation extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      changed: false,
      dataSource: [],
      noUpdates: false,
    };
  }

// Using to change state of heart in Drives Card
  funcDrivesInfoHeader = (state, changed) => {
    this.setState({
      isActive: !state.hearts[0].isActive,
      changed: changed,
    })
  }

  componentWillMount() {
    const drives = this.props.navigation.getParam('drive', 'No-Drive');

      function processResponse(response) {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]).then(res => ({
          statusCode: res[0],
          data: res[1]
        }));
      }

      fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/drive_engagement_feed', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        drive_id: drives.drive_id,
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          this.setState({
            dataSource: data.drive_engagement_feed,
            noUpdates: false,
          }
        )
        } else {
          this.setState({
            dataSource: [1],
            noUpdates: true
          })
          //alert(data.message);
        }
      })
      .catch((error) => {
        alert(error)
      });
  };

  componentWillUnmount() {
    //this.props.navigation.state.params.returnData(this.state);
  }

  render() {
    const drives = this.props.navigation.getParam('drive', 'No-Drive');
    const user_id = this.props.navigation.getParam('user_id');
    return (
        <View style={styles.Container}>
          <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => ( !this.state.noUpdates ? (<CharityFeedCard2 charity= {item}/>) :
                (<View style={styles.noDrivesFoundContainer}>
                  <Text style={styles.noDrivesFoundText}>This drive does not have any updates yet. Please check back later.</Text></View>)

              )}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={<DriveInfoHeader drive={drives} user_id={user_id}/>}
          />
        </View>
    );
  }
}


export default DriveInformation;

const styles= EStyleSheet.create({
  Container:{
    backgroundColor: '$blueBackground',
    flex:1,
    paddingTop:5,
  },
  noDrivesFoundContainer: {
    backgroundColor: '$background',
    width: imageWidth/1.028,
    marginHorizontal: 5,
  },
  noDrivesFoundText: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily: '$textFont',
  },
});
