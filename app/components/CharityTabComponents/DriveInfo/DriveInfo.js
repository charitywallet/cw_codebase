import React, { Component } from 'react';
import {CharityFeedCard2} from 'app/components/DashboardComponents/CharityFeedCard2';
import {DefaultCharityFeedCard} from 'app/components/DashboardComponents/DefaultCharityFeedCard';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import { Dimensions } from 'react-native';


const imageWidth = (Dimensions.get('window').width);

export default class DriveInfo extends Component {
  render() {
    return (
        <View style={styles.Container}>
          <FlatList
                data={[{charityImageURL: require('./image/background.jpg')
                , charityName: 'ABSforTheWin', updateDate: 'April 27, 2019'
                , feedImageURL: require('./image/homeless.jpg')
                , feedMessage: 'Thank you so much guys!! You are amazing. We used your money go give ourselves fat bonus cheques!'
                , numDonations: '25'}]}
                renderItem={({item}) => (
                <CharityFeedCard2
                  charity= {item}/>
              )}
              keyExtractor={(item, index) => index.toString()}
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
