import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {CharityFeedCard} from '../components/DashboardComponents/CharityFeedCard';
import {CharityFeedCard2} from '../components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from '../components/DashboardComponents/DefaultCharityFeedCard';

class CharityFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
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
          }
        )
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert(error)
      });
    };


  render() {
    return(
      <View style={{backgroundColor: "#D3E3E6", paddingTop: 5,}}>
      <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
            <CharityFeedCard2
              charity= {item}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<DefaultCharityFeedCard />}
      />
      </View>
    );
  }
};


export default CharityFeed;
