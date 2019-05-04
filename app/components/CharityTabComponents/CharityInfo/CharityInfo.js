import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import { Dimensions } from 'react-native';
import {DrivesCard} from '../DrivesCard';
import {CharityFeedCard2} from '/Users/anuj/Documents/School_Work/spring_2019/capstone/charitywallet/cw_codebase/app/components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from '/Users/anuj/Documents/School_Work/spring_2019/capstone/charitywallet/cw_codebase/app/components/DashboardComponents/DefaultCharityFeedCard';

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
    ]

const charityData = 

export default class DriveInfo extends Component {
  render() {
    return (
        <View style={styles.Container}>
        <FlatList
              columnWrapperStyle={styles.row}
              data={driveData}
              renderItem={({item}) => (
              <DrivesCard
                drive= {item}/>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
              ListHeaderComponent={
                <View style={styles.Container}>
                  <Text style={styles.charityName}>{this.props.drive.charityName}</Text>
                  <Image resizeMode= 'stretch' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />
                  <Text numberOfLines={2} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
                  <Text style={styles.location}>{this.props.drive.driveLocation}</Text>
                  <ProgressBar
                    progress={this.props.drive.percentCompleted}
                    width= {imageWidth}
                    color= '#92C7C7'
                    borderColor= '#92C7C7'
                  />
                  <View style={styles.moneyRaised}>
                    <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
                    <Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>
                  </View>
                  <Text style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>
                  <Text style={styles.numDonations}>{this.props.drive.numDonations} donations have been made to this drive so far.</Text>
                  {/*Add in the Flatlist for the drive updates*/}
                  <Text style={styles.driveUpdatesHeader}>Updates for this drive till now...</Text>
                </View>
              }
              ListFooterComponent={<DefaultCharityFeedCard />}
          />
        </View>
    );
  }
}
