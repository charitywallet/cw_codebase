import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {CharityFeedCard} from '../components/DashboardComponents/CharityFeedCard';
import {CharityFeedCard2} from '../components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from '../components/DashboardComponents/DefaultCharityFeedCard';
import EStyleSheet from 'react-native-extended-stylesheet';

class CharityFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      noAlerts: false,
    };
  }

  componentWillMount() {
    console.log("user_id", this.props.user_id)
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
        user_id: this.props.user_id,
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          console.log("data", data)
          this.setState({
            dataSource: data.drive_engagement_feed,
              noAlerts: false,
          }
        )
        } else {
          if(data.message === "No updates for your drives. Support more drives to see how your change is changing the world."){
            this.setState({
              noAlerts: true,
            })
          } else {
            alert(data.message);
          }
        }
      })
      .catch((error) => {
        alert(error)
      });
    };


  render() {
    return(
      <View style={styles.background}>
      {this.state.noAlerts ? <Text style={styles.selectDrives}>No updates for your drives yet. Support more drives and check back later to see how your change is changing the world!</Text> : null}
      <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
            <CharityFeedCard2
              charity= {item}/>
          )}
          keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  background: {
    backgroundColor: "$blueBackground",
    paddingTop: 5,
  },
  selectDrives: {
    fontFamily: '$textFont',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#fff'
  }
});

export default CharityFeed;
