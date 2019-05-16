import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, Dimensions, Animated} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import Icon from 'react-native-animated-icons';
import { connect } from 'react-redux'

const imageWidth = (Dimensions.get('window').width -25)/2;

class DrivesCard extends Component {

  constructor(props){
    super(props);
    if (this.props.sourcePage === 'Supported'){
      var isActive = false;
      //console.log("this.props.favoriteDrives", this.props.favoriteDrivesInfo)
      for(const i in this.props.favoriteDrivesInfo){
        //console.log("i", i)
        //console.log("this.props.favoriteDrive", this.props.favoriteDrivesInfo[i])
        if(this.props.favoriteDrivesInfo[i].drive_id === this.props.drive.drive_id){
          // console.log("Topic exists in favorite")
          isActive = true;
          break;
        }
      };
    }
    else {
      var isActive = this.props.drive.userSelected
      //console.log("this.props.drive.userSelected", this.props.drive.userSelected)
      //console.log("this.props", this.props)
    }
    this.state = {
      triggerAnimationId:null,
      //hearts:[{isActive:isActive,"id":this.props.drive.drive_id}],
      hearts:[{isActive:isActive,"id":this.props.drive.drive_id}],
      changed: false,
    };
//console.log("hearts", this.state.hearts)
  }

  returnData(state){
    if (state.changed === true){
      this.setState({
        hearts:[{isActive:state.isActive,"id":this.state.hearts[0].id}],
        changed: true,
      });
    }
  }

  // componentWillUpdate(nextProps, nextState){
  //   //console.log("comp will update state", this.state)
  //   // console.log("nest state", nextState); //will show the new state
  //   // console.log("prev state", this.state); //will show the previous state
  //   if (nextState.initial === true || (nextState.changed === true)){
  //     return true;
  //   }
  //   return false;
  //   //console.log( "comp will update");
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   // console.log("this.props.drive.userSelected", this.props.drive.userSelected)
  //   // console.log("this.state.hearts[0].isActive",this.state.hearts[0].isActive)
  //   if(this.props.drive.userSelected !== this.state.hearts[0].isActive){
  //     console.log("update")
  //     return true
  //   }
  //   console.log("dont update")
  //   return false
  // }

  onPressHearts = (item, drive) => {
    if (item.isActive) {
      //console.log("remove")
      this.props.removeFromFav(drive)
    } else {
      //console.log("add")
      if (this.props.funcFirstDrive) {
        var first = false
        if (this.props.favoriteDrivesInfo.length === 0 && this.props.lifetimeTotal === 0){
          first = true
        }
        this.props.funcFirstDrive(first);

      }
      this.props.addToFav(drive)
    }

    if(!item)return
    let {hearts} = this.state
    // console.log("sourcePage", this.props.sourcePage)
    if (this.props.sourcePage === 'Supported'){
      let updatedlist=hearts.map(o => o.id === item.id
                            ?{ ...o, isActive: o.isActive?true:false}
                          :o)
      this.setState({
        triggerAnimationId:hearts.find(x => x.id === item.id).id,
        hearts: updatedlist})
    }
    else {
      let updatedlist=hearts.map(o => o.id === item.id
                            ?{ ...o, isActive: o.isActive?false:true}
                          :o)
      this.setState({
        triggerAnimationId:hearts.find(x => x.id === item.id).id,
        hearts: updatedlist})
    }
    // console.log("updatedlist", updatedlist)
    // this.setState({
    //   triggerAnimationId:hearts.find(x => x.id === item.id).id,
    //   hearts: updatedlist})
    if (this.props.func) {
      this.props.func(this.props.drive.userSelected, this.props.drive.drive_id);
    }

    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }


    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/drive_selection', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.user_id,
      drive_id: this.props.drive.drive_id,
      charity_id: this.props.drive.charity_id,
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
      // console.log("successful")
      // console.log("userid", this.props.user_id)
      // console.log("drive_id", this.props.drive.drive_id)
      // console.log("charity_id", this.props.drive.charity_id)
      } else {
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });
    //this.props.drive.userSelected = !this.props.drive.userSelected;
  }

  onPressDrive = (text) => {
    this.props.navigation.navigate('DriveInformation',
        {drive: this.props.drive, navigation:this.props.navigation, user_id:this.props.user_id,
        sourcePage: this.props.sourcePage})//, returnData: this.returnData.bind(this)});
  }

  render() {
    const {hearts} = this.state
    let red="rgba(245,60,60,0.85)"

    return (
        <TouchableOpacity onPress= {() => this.onPressDrive(this.props.drive.driveTitle)}>
        <View style={styles.Container}>
          <Image resizeMode= 'contain' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />

          {this.props.drive.driveState ?
            <View style={styles.textHeartContainer}>
              <Text style={styles.location}>{this.props.drive.driveCity}, {this.props.drive.driveState}</Text>
              {hearts.map((o,i) => {

                return   (
                  <TouchableOpacity style={{height:25,}} key={i}
                  onPress={()=>this.onPressHearts(o, this.props.drive)}>
                  {/*onPress={()=>this.props.addToFav(o)}>*/}

                    <Icon
                      item={o}
                      fontSize={25}
                      name={o.isActive?"heart":"heart-outline"}
                      // name={"heart"}
                      isActive={o.isActive}
                      colorOutputRange={[
                      red,
                      red,
                       o.isActive?red:red,
                    ]}
                    animation={{toValue: 1,duration: 400}}
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
                  <TouchableOpacity style={{height:25,}} key={i} onPress={()=>this.onPressHearts(o, this.props.drive)}>
                    <Icon
                      item={o}
                      fontSize={25}
                      name={o.isActive?"heart":"heart-outline"}
                      // name={"heart"}
                      isActive={o.isActive}
                      colorOutputRange={[
                        red,
                        red,
                       o.isActive?red:red,
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

function mapStateToProps(state) {
    return {
        favoriteDrivesInfo: state.favoriteDrivesInfo,
        allDrivesInfo: state.allDrivesInfo,
        lifetimeTotal: state.lifetimeTotal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFav: (drive) => dispatch({ type: 'ADD_TO_FAV', drive:drive }),
        removeFromFav: (drive) => dispatch({ type: 'REMOVE_FROM_FAV', drive:drive }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrivesCard)

//export default DrivesCard;
