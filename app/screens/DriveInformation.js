import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {CharityFeedCard2} from 'app/components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from 'app/components/DashboardComponents/DefaultCharityFeedCard';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { Dimensions } from 'react-native';
import {DriveInfoHeader} from 'app/components/CharityTabComponents/DriveInfoHeader'


const imageWidth = (Dimensions.get('window').width);

// const driveInfo =
//       {
//         driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
//       , driveCity: 'Berkeley'
//       , driveState: 'CA'
//       , driveTitle: 'Help Detective Pikachu'
//       , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
//       , currentMoney: '450'
//       , targetMoney: '2000'
//       , percentCompleted: 0.8
//       , charityName: 'Pokemon Squad'
//       , numDonations: '30'
//       }

const driveFeedUpdate =
      [
        {
          charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
        , charityName: 'ABSforTheWin'
        , updateDate: 'April 27, 2019'
        , feedImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
        , feedMessage: 'Thank you so much guys!! You are amazing. We used your money go give ourselves fat bonus cheques!'
        , numDonations: '25'
        , driveName: 'Help Detective Pikachu'
        }
      ]

export default class DriveInformation extends Component {
  render() {
    const drives = this.props.navigation.getParam('drive', 'No-Drive');
    return (
        <View style={styles.Container}>
          <FlatList
                data={driveFeedUpdate}
                renderItem={({item}) => (
                <CharityFeedCard2
                  charity= {item}/>
              )}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={<DriveInfoHeader drive={drives} />}
              ListFooterComponent={<DefaultCharityFeedCard />}
          />
        </View>
    );
  }
}

const styles= EStyleSheet.create({
  Container:{
    flex:1
  },
});
