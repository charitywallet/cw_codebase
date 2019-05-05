import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import { Dimensions } from 'react-native';
import {DrivesCard} from 'app/components/CharityTabComponents/DrivesCard';
import {CharityInfoHeader} from 'app/components/CharityTabComponents/CharityInfoHeader'
const imageWidth = (Dimensions.get('window').width);

const driveData =
    [
      {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
      , driveLocation: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
      , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
      , currentMoney: '450'
      , targetMoney: '2000'
      , percentCompleted: 0.8},
      {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
      , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
      , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
      , currentMoney: '450'
      , targetMoney: '2000'
      , percentCompleted: 0.3},
      {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
      , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
      , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
      , currentMoney: '450'
      , targetMoney: '2000'
      , percentCompleted: 0.3},
      {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
      , driveLocation: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
      , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
      , currentMoney: '450'
      , targetMoney: '2000'
      , percentCompleted: 0.7},
    ]

// const charityData =
//     {
//       charityName: 'Chen Award Foundation'
//     , charityCity: 'Berkeley'
//     , charityState: 'CA'
//     , charityImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
//     , charityAbout: 'This charity was established to give the MIMS students something to work towards in their final semester. It keeps most of the money for itself and pays peanuts to the winners.'
//     , numDonations: '20'
//     }

export default class CharityInfo extends Component {
  render() {
    const charity = this.props.navigation.getParam('charity', 'No-Charity');
    return (
        <View style={styles.Container}>
          <FlatList
                columnWrapperStyle={styles.row}
                data={driveData}
                renderItem={({item}) => (<DrivesCard drive= {item}/>)}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ListHeaderComponent={<CharityInfoHeader charityData= {charity} />}
          />
        </View>
    );
  }
}

const styles= EStyleSheet.create({
  Container:{
    flex:1
  },
  row: {
  flex: 1,
  justifyContent: 'space-between'
  }
});
