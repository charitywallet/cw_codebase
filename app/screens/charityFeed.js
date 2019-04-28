import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {CharityFeedCard} from '../components/DashboardComponents/CharityFeedCard';

class CharityFeed extends Component {

  render() {
    return(
      <View>
      <FlatList
            data={[{charityImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , charityName: 'ABSforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'},
            {charityImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , charityName: 'BASforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'},
            {charityImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , charityName: 'SABforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , feedMessage: 'Thank you so much guys!!', numDonations: '25'}]}
            renderItem={({item}) => (
            <CharityFeedCard
              charity= {item} />
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
