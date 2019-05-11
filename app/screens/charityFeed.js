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

  componentDidMount() {
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
            dataSource: data,
          }
        )
        } else {
          alert(data.message); //TODO: Network error component
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
            data={[{charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
            , charityName: 'ABSforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: 'https://yt3.ggpht.com/a/AGF-l7_iByGOtzloxqaXAGPoLI4TTkoZY4UjlisrRA=s900-mo-c-c0xffffffff-rj-k-no'
            , feedMessage: 'Thank you so much guys!! You are amazing. We used your money go give ourselves fat bonus cheques!'
            , numDonations: '25'
            , driveName: 'Help Detective Pikachu'},
            {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
            , charityName: 'BASforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'
            , driveName: 'Help Detective Pikachu'},
            {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
            , charityName: 'SABforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'
            , driveName: 'Help Detective Pikachu'}]}
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

// '../Carousel/image/background.jpg'
// '../components/DashboardComponents/Carousel/image/background.jpg'
// <CharityFeedCard
//   charity= {item} />
