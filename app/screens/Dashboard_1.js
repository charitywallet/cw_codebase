import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Carousel} from '../components/DashboardComponents/Carousel'
import {CurrentAmountCard} from '../components/DashboardComponents/CurrentAmountCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationEvents } from 'react-navigation';

const imageWidth = Dimensions.get('window').width;

class Dashboard_1 extends Component {

  state = {
    user_id: this.props.user_id,
    active_charities: '',
    active_drives: '',
    month_total: '',
    lifetime_total: '',
    drives_supported: false,
    update: false,
  }

componentWillMount() {
  //console.log("mount")
    this.getUserDetails();
    //this.load()
    //this.props.navigation.addListener('willFocus', this.load)
    //console.log("state", this.state)
  }

// componentWillUpdate() {
//   console.log("inside update")
//   this.getUserDetails();
//   //this.load()
//   console.log("state update", this.state)
// }

getUserDetails() {
  //console.log("details")
  function processResponse(response) {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]).then(res => ({
      statusCode: res[0],
      data: res[1]
    }));
  }

  fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/get_user_totals', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: this.state.user_id,
  }),
}).then(processResponse)
  .then(response => {
    const { statusCode, data } = response;
    if (statusCode == 200) {
      this.setState((prevState, props) => ({
        active_charities: data.totals.active_charities,
        active_drives: data.totals.active_drives,
        month_total: data.totals.month_total,
        lifetime_total: data.totals.lifetime_total,
        update: false,
      }))
      if (data.totals.active_drives >= 1) {
        this.setState({
          drives_supported: true,
          //update: false,
        })
      } else {
        this.setState({
          drives_supported: false,
          //update: false,
        })
      }
    } else {
      alert(data.message); //TODO: Network error component
    }
  })
  .catch((error) => {
    alert(error)
  });
}

  // load = () => {
  //     console.log("inside load");
  //     this.setState({
  //       update: true,
  //     })
  //   }

// shouldComponentUpdate(nextProp, nextState){
//   //console.log("update", this.state)
//   // if ((this.state.active_drives !== nextState.active_drives) ||
//   // (this.state.drives_supported === false && this.state.update === true)){
//   //   console.log("should update")
//   //   return true;
//   // }
//   // console.log("should not update")
//   // return false;
//   if (this.state.update === true) {
//     return true
//   }
//   return false
// }

  render() {
    return(
      <View style={styles.container}>
      {this.state.drives_supported ?
        <View>
          <View style={styles.currencyCardContainer}>
            <CurrentAmountCard month_total={this.state.month_total}/>
          </View>
          <View style={styles.carouselContainer}>
            <Carousel active_charities={this.state.active_charities}
            active_drives={this.state.active_drives} lifetime_total={this.state.lifetime_total}/>
          </View>
        </View>
        : <View style={styles.containerNoSelection}>
          <Text style={styles.textNoSelection}>Congrats on taking the first step towards changing the world! {"\n"}{"\n"}
          Please select drives to start donating and make a difference. </Text>
        </View>}
        </View>

    );
  }
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3E3E6",
    //marginTop: -15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  containerNoSelection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    //marginTop: -15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  textNoSelection: {
    fontSize: 20,
    color: '$primaryBlue',
    textAlign: 'center'
  },
  currencyCardContainer: {
    width: imageWidth,
    paddingTop:73.5,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: .3,
    height: 250,
  },
  carouselContainer: {
    width: imageWidth,
    backgroundColor: 'white',
    marginTop: 40,
    height: 280,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: .3,
  }
});


export default Dashboard_1;


// <NavigationEvents
// onWillFocus={payload => console.log('will focus',payload)}
// onDidFocus={payload => console.log('did focus',payload)}
// onWillBlur={payload => console.log('will blur',payload)}
// onDidBlur={payload => console.log('did blur',payload)}
// />
