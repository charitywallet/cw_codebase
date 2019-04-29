import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';

class Drives extends Component {

  render() {
    return(
      <View>
      <FlatList
            data={[{driveImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'},
            {driveImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'},
            {driveImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'}]}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item}/>
          )}
          keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
};


export default Drives;

// '../Carousel/image/background.jpg'
// '../components/DashboardComponents/Carousel/image/background.jpg'
// <CharityFeedCard
//   charity= {item} />
