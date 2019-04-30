import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';

class Drives extends Component {

  render() {
    return(
      <View>
      <FlatList
            columnWrapperStyle={styles.row}
            data={[{driveImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.8},
            {driveImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.8},
            {driveImageURL: require('../components/DashboardComponents/Carousel/image/background.jpg')
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.8}]}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
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

const styles= EStyleSheet.create({
  row: {
  flex: 1,
  justifyContent: 'space-between'
  }
});
