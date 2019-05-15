import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import { Dimensions } from 'react-native';
import {DrivesCard} from 'app/components/CharityTabComponents/DrivesCard';
import {CharityInfoHeader} from 'app/components/CharityTabComponents/CharityInfoHeader'
const imageWidth = (Dimensions.get('window').width);

export default class CharityInfo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dataSource: [],
        noDrives: false,
      };
    }


  componentWillMount(){
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/get_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.navigation.getParam('user_id', 0),
      my_drives: 0,
      charity_id: this.props.navigation.getParam('charity', 'No-Charity').charity_id,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        this.setState({
          dataSource: data.drives,
          noDrives: false,
        })
      } else {
          this.setState({
            dataSource: [1],
            noDrives: true
          })
          //alert(data.message);
        }
      }
    )
    .catch((error) => {
      alert(error)
    });
  }

  render() {
    const charity = this.props.navigation.getParam('charity', 'No-Charity');
    return (
      <View style={styles.Container}>

        <View style={styles.flatListContainer}>
          <FlatList
                columnWrapperStyle={styles.row}
                data={this.state.dataSource}
                renderItem={({item}) => ( !this.state.noDrives ? (<DrivesCard drive= {item}/>) :
                (<View style={styles.noDrivesFoundContainer}>
                  <Text style={styles.noDrivesFoundText}>No drives found. Please check back later.</Text></View>)
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ListHeaderComponent={<CharityInfoHeader charityData= {charity} />}
                ListFooterComponent={<View style={styles.footer}/>}
          />
        </View>
      </View>
    );
  }
}

const styles= EStyleSheet.create({
  Container:{
    backgroundColor: '$blueBackground',
    flex:1,
    paddingTop:5,

  },
  row: {
    flex: 1,
    justifyContent: 'space-between'
  },
  flatListContainer:{
    backgroundColor: 'white',
    // width: '98%',
    alignSelf: 'center',
    // paddingBottom: 10,
  },
  noDrivesFoundContainer: {
    backgroundColor: '$background',
    width: imageWidth/1.028,
    marginHorizontal: 5,
  },
  noDrivesFoundText: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily: '$textFont',
  },
  footer:{
    backgroundColor: '$blueBackground',
    height:30,
  }
});
