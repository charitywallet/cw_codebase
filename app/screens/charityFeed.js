import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {CharityFeedCard} from '../components/DashboardComponents/CharityFeedCard';
import {CharityFeedCard2} from '../components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from '../components/DashboardComponents/DefaultCharityFeedCard';

class CharityFeed extends Component {

  render() {
    return(
      <View style={{backgroundColor: "#D3E3E6", paddingTop: 5,}}>
      <FlatList
            data={[{charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
            , charityName: 'ABSforTheWin', updateDate: 'April 27, 2019'
            , feedImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
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
