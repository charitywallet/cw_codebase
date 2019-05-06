import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import Icon from 'react-native-animated-icons';

const imageWidth = (Dimensions.get('window').width -20)/2;

export default class DrivesCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      triggerAnimationId:null,
      // triggerAnimationId:1,
      hearts:[{isActive:this.props.drive.drive_id,"id":this.props.drive.drive_id}],
      //user_id: this.props.user_id,
      // hearts:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}],
      // tweets:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}]
    };

  }

  onPressHearts = (item) => {

    if(!item)return
    // item.isActive!=item.isActive
    let {hearts} = this.state
    let updatedlist=hearts.map(o => o.id === item.id
                          ?{ ...o, isActive: o.isActive?false:true}
                        :o)
    this.setState({
      triggerAnimationId:hearts.find(x => x.id === item.id).id,
      hearts: updatedlist})
    console.log(" onPress:item ",this.state);

    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }


    fetch('http://0.0.0.0:5000/drive_selection', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.user_id,
      drive_id: this.props.drive.drive_id,
      charity_id: this.props.drive.charity_id,
      my_drives: false,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
      //   this.setState({
      //     drives: data.drives,
      //     isLoading: false,
      //     dataSource: data.drives,
      //   }
      // )
        console.log("Backend call successful. User selected-", this.props.drive.userSelected);
      } else {
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });

  }

  onPressDrive = (text) => {
    this.props.navigation.navigate('DriveInformation',
        {drive: this.props.drive, navigation:this.props.navigation,});
  }

  render() {
    const {hearts} = this.state
    let red="rgba(245,60,60,0.8)"

    return (
        <TouchableOpacity onPress= {() => this.onPressDrive(this.props.drive.driveTitle)}>
        <View style={styles.Container}>
          <Image resizeMode= 'contain' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />

          {this.props.drive.driveState ?
            <View style={styles.textHeartContainer}>
              <Text style={styles.location}>{this.props.drive.driveCity}, {this.props.drive.driveState}</Text>
              {hearts.map((o,i) => {

                return   (
                  <TouchableOpacity style={{height:25,}} key={i} onPress={()=>this.onPressHearts(o)}>
                    <Icon
                      item={o}
                      fontSize={25}
                      name={o.isActive?"heart":"heart-outline"}
                      // name={"heart"}
                      isActive={o.isActive}
                      colorOutputRange={[
                      "red",
                      "pink",
                       o.isActive?red:"red",
                    ]}
                    // animateAllActive
                    colorInputRange={[0, 0.56, 1]}
                  />
                  </TouchableOpacity>)
              })}
              </View>
            :
            <View style={styles.textHeartContainer}>
              <Text style={styles.location}>{this.props.drive.driveCity}</Text>
              {hearts.map((o,i) => {

                return   (
                  <TouchableOpacity style={{height:25,}} key={i} onPress={()=>this.onPressHearts(o)}>
                    <Icon
                      item={o}
                      fontSize={25}
                      name={o.isActive?"heart":"heart-outline"}
                      // name={"heart"}
                      isActive={o.isActive}
                      colorOutputRange={[
                      "red",
                      "pink",
                       o.isActive?red:"red",
                    ]}
                    colorInputRange={[0, 0.56, 1]}
                  />
                  </TouchableOpacity>)
                })}
            </View>
          }


          <Text numberOfLines={2} style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
          {/*<Text numberOfLines={2} style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>*/}
          {/*ProgressBar component goes here*/}
          <ProgressBar
            progress={this.props.drive.percentCompleted}
            width= {imageWidth}
            color= '#92C7C7'
            borderColor= '#92C7C7'
          />
          <View style={styles.moneyRaised}>
            <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
            {/*<Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>*/}
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}
