import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles'
import { Dimensions } from 'react-native';
import Icon from 'react-native-animated-icons';
import { connect } from 'react-redux'

const imageWidth = (Dimensions.get('window').width);

class DriveInfoHeader extends Component {
  constructor(props){
    super(props);
    //if (this.props.sourcePage === 'Supported'){
      // var isActive = false;
      // //console.log("this.props.favoriteDrives", this.props.favoriteDrivesInfo)
      // for(const i in this.props.allDrivesInfo){
      //   //console.log("i", i)
      //   //console.log("this.props.favoriteDrive", this.props.favoriteDrivesInfo[i])
      //   if(this.props.allDrivesInfo[i].drive_id === this.props.drive.drive_id){
      //     // console.log("Topic exists in favorite")
      //     isActive = this.props.allDrivesInfo[i].userSelected;
      //     console.log("isActive", isActive)
      //     break;
      //   }
      // };
    //}
    // else {
    //   var isActive = this.props.drive.userSelected
    // }
    this.state = {
      triggerAnimationId:null,
      hearts:[{isActive:this.props.drive.userSelected,"id":this.props.drive.drive_id}],
    };

  }

  onPressHearts = (item, drive) => {
    if (item.isActive) {
      this.props.removeFromFav(drive)
    } else {
      this.props.addToFav(drive)
    }


    if(!item)return
    // item.isActive!=item.isActive
    let {hearts} = this.state
    let updatedlist=hearts.map(o => o.id === item.id
                          ?{ ...o, isActive: o.isActive?false:true}
                        :o)
    this.setState({
      triggerAnimationId:hearts.find(x => x.id === item.id).id,
      hearts: updatedlist})
    //console.log(" onPress:item ",this.state);
    //this.props.func(this.props.drive.userSelected, this.props.drive.drive_id);
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
      } else {
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });
    //this.props.funcDrivesInfoHeader(this.state, true);
}


  render() {
    const {hearts} = this.state
    let red="rgba(245,60,60,0.85)"
    return (
            <View style={styles.Container}>
              <Text style={styles.driveTitle}>{this.props.drive.driveTitle}</Text>
              <Text style={styles.charityName}>by: {this.props.drive.charityName}</Text>
              <Text style={styles.location}>{this.props.drive.driveCity}, {this.props.drive.driveState}</Text>
              <Image resizeMode= 'contain' source={{uri:this.props.drive.driveImageURL}} style={styles.driveImage} />
              <View style={styles.progressBar}>
                <Text style={styles.driveProgressText}>Drive Progress:</Text>
                <ProgressBar
                  progress={this.props.drive.percentCompleted}
                  width= {imageWidth - imageWidth/10}
                  color= '#92C7C7'
                  borderColor= '#92C7C7'
                />
                <View style={styles.moneyRaised}>
                  <Text style={styles.currentMoney}>${this.props.drive.currentMoney} raised</Text>
                  <Text style={styles.targetMoney}> of ${this.props.drive.targetMoney}</Text>
                </View>
              </View>
              <Text style={styles.driveAboutTitle}>About:</Text>
              <Text style={styles.driveAbout}>{this.props.drive.driveAbout}</Text>
              <View style={styles.charityNavigatorDetails}>
                <Text style={styles.charityNavigatorDetailsHeader}>Additional Information about the charity:</Text>
                <Text style={styles.charityNavigator2}>Charity Navigator Overall Score: {this.props.drive.charityNavigatorScore}</Text>
                <Text style={styles.charityNavigator3}>Tax Deductibility: {this.props.drive.deductibility}</Text>
              </View>
              <Text style={styles.numDonations}>{this.props.drive.numDonations} donors have contributed to this drive</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 5, alignItems: 'center'}}>
              <View  style={{flexDirection: 'row'}}>
                 {hearts.map((o,i) => {

                  return   (
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', borderColor: red, borderRadius: 6, borderWidth: 1, padding: 2,}} key={i} onPress={()=>this.onPressHearts(o, this.props.drive)}>
                    <Text style={{color: red, fontFamily:'Avenir', paddingRight: 3, fontWeight: '700', fontSize: 14}}>Add to Favorites</Text>
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
                      // animateAllActive
                      colorInputRange={[0, 0.56, 1]}
                    />
                    </TouchableOpacity>)
                })}
              </View>
              </View>
              <View style={styles.updateSeparator} />
              <Text style={styles.driveUpdatesHeader}>Drive Updates</Text>
            </View>
          );
        }
      }

function mapStateToProps(state) {
    return {
        favoriteDrives: state.favoriteDrives
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFav: (drive) => dispatch({ type: 'ADD_TO_FAV', drive:drive }),
        removeFromFav: (drive) => dispatch({ type: 'REMOVE_FROM_FAV', drive:drive }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriveInfoHeader)


// export default DriveInfoHeader;
