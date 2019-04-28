import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {CharityFeedCard} from '../components/DashboardComponents/CharityFeedCard';
import {CharityFeedCard2} from '../components/DashboardComponents/CharityFeedCard2';

class CharityFeed extends Component {

  render() {
    return(
      <View>
      <FlatList
            data={[{charityImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , charityName: 'ABSforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , feedMessage: 'Thank you so much guys!! You are amazing. We used your money go give ourselves fat bonus cheques!'
            , numDonations: '25'},
            {charityImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , charityName: 'BASforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'},
            {charityImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , charityName: 'SABforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'}]}
            renderItem={({item}) => (
            <CharityFeedCard2/>
          )}
          keyExtractor={(item, index) => index.toString()}
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
