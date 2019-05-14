import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {Carousel} from '../components/DashboardComponents/Carousel'
import {CurrentAmountCard} from '../components/DashboardComponents/CurrentAmountCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux'
import { Overlay, Button, Input } from 'react-native-elements';
//import FloatingHearts from 'react-native-floating-hearts'

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

class Dashboard_1 extends Component {

  state = {
    user_id: this.props.user_id,
    active_charities: '',
    active_drives: '',
    month_total: '',
    lifetime_total: '',
    update: false,
    counter: 0,
    isVisible: true,
    isDonateNowVisible: false,
    isDonateCustomVisible: false,
    amount: '',
    count: 10,
    isVisibleThanks: false,
  }

componentWillMount() {
  //console.log("mount")
    this.getUserDetails();
    this.getSupportedDrives();
}

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
      this.props.updateLifetimeTotal(data.totals.lifetime_total);
      this.props.updateMonthTotal(data.totals.month_total);
    } else {
      alert(data.message); //TODO: Network error component
    }
  })
  .catch((error) => {
    alert(error)
  });
}

getSupportedDrives(){
  var initialState = []
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
    user_id: this.state.user_id,
    my_drives: 1,
  }),
}).then(processResponse)
  .then(response => {
    const { statusCode, data } = response;
    if (statusCode == 200) {
      initialState = data.drives;
      this.props.setInitialFav(data.drives);
    }
  })
  .catch((error) => {
    alert(error)
  });

  fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/get_drives', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: this.state.user_id,
    my_drives: 0,
  }),
}).then(processResponse)
  .then(response => {
    const { statusCode, data } = response;
    if (statusCode == 200) {
      this.props.setInitialAll(data.drives);
    }
  })
  .catch((error) => {
    alert(error)
  });
  // if (this.props.favoriteDrivesInfo.length===0 && this.props.lifetimeTotal===0){
  //   this.setState({
  //     isVisible: true,
  //   })}
    // else {
  //   this.setState({
  //     isVisible: false,
  //   })
  // }
}


onPressDonateNow = () => {
  console.log("pressed donate now");
  this.setState({
    isDonateNowVisible: true,
  })
}

onDonateNowYesPress = () => {
  function processResponse(response) {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]).then(res => ({
      statusCode: res[0],
      data: res[1]
    }));
  }

  fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/donate_now', {
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
          this.getUserDetails()
          //console.log("successful")
          this.setState({
            isDonateNowVisible: false,
            isVisibleThanks: true,
          })
          //this.props.setInitialFav(data.drives);
        }
        else {
          alert(data.message)
        }
      })
      .catch((error) => {
        alert(error)
      });
};

onDonateNowNoPress = () => {
    this.setState({
      isDonateNowVisible: false
    })
}

onPressDonateCustom = () => {
  this.setState({
    isDonateCustomVisible: true,
  })
}

onDonateCustomYesPress = () => {
  if (this.state.amount == '' || isNaN(this.state.amount)){
    alert("Please enter a valid amount.")
    return
  }
  function processResponse(response) {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]).then(res => ({
      statusCode: res[0],
      data: res[1]
    }));
  }

  fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/donate_now', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        amount: this.state.amount,
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          //this.props.updateMonthTotal(0);
          this.getUserDetails()
          console.log("successful")
          this.setState({
            isDonateCustomVisible: false,
            isVisibleThanks: true,
          })
        }
        else {
          alert(data.message)
        }
      })
      .catch((error) => {
        alert(error)
      });
};

onDonateCustomNoPress = () => {
    this.setState({
      isDonateCustomVisible: false,
      count: 10,
    })

}

onThanksPress = () => {
    this.setState({
      isVisibleThanks: false
    })
}

  render() {
    const { count } = this.state.count
    return(
      <View style={styles.container}>
       {/*{this.state.count ? <FloatingHearts count={count} /> : null}*/}

      <Overlay isVisible={this.state.isDonateNowVisible} onBackdropPress={this.onDonateNowNoPress}
      overlayStyle={styles.overlay} windowBackgroundColor="rgba(0, 0, 0, .7)">
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Your monthly balance will be donated. Do you want to proceed?</Text>
          <View style={styles.buttonGroup}>
            <Button title="Yes" onPress = {this.onDonateNowYesPress} containerStyle = {styles.buttonContainer1}
            titleStyle={styles.buttonText} buttonStyle={styles.button}/>
            <Button title="No" onPress = {this.onDonateNowNoPress} containerStyle = {styles.buttonContainer1}
            titleStyle={styles.buttonText} buttonStyle={styles.button}/>
          </View>
        </View>
      </Overlay>
      <Overlay isVisible={this.state.isDonateCustomVisible} onBackdropPress={this.onDonateCustomNoPress}
      overlayStyle={styles.overlay} windowBackgroundColor="rgba(0, 0, 0, .7)">
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Please enter the amount you would like to donate.</Text>
          <Input placeholder='$20' containerStyle={{width: 100,}} onChangeText={amount => this.setState({ amount })}
          value={this.state.amount}/>
          <View style={styles.buttonGroup}>
            <Button title="Donate" onPress = {this.onDonateCustomYesPress} containerStyle = {styles.buttonContainer1}
            titleStyle={styles.buttonText} buttonStyle={styles.button}/>
            <Button title="Exit" onPress = {this.onDonateCustomNoPress} containerStyle = {styles.buttonContainer1}
            titleStyle={styles.buttonText} buttonStyle={styles.button}/>
          </View>
        </View>
      </Overlay>

      <Overlay isVisible={this.state.isVisibleThanks} onBackdropPress={this.onThanksPress}
      overlayStyle={styles.overlay} windowBackgroundColor="rgba(0, 0, 0, .7)">
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Thanks for your donation! You are making a difference in the world.</Text>
          <View style={styles.buttonGroup}>
            <Button title="Done" onPress = {this.onThanksPress} containerStyle = {styles.buttonContainer1}
            titleStyle={styles.buttonText} buttonStyle={styles.button}/>
          </View>
        </View>
      </Overlay>

          <View>
            <View style={styles.currencyCardContainer}>
              <CurrentAmountCard month_total={this.props.monthTotal} onPressDonateNow={this.onPressDonateNow}
              onPressDonateCustom={this.onPressDonateCustom}/>
            </View>
            <View style={styles.carouselContainer}>
              <Carousel active_charities={this.state.active_charities}
              active_drives={this.props.favoriteDrivesInfo.length} lifetime_total={this.props.lifetimeTotal}/>
            </View>
          </View>
     </View>


    );
  }
};

function mapStateToProps(state) {
    return {
        favoriteDrivesInfo: state.favoriteDrivesInfo,
        lifetimeTotal: state.lifetimeTotal,
        monthTotal: state.monthTotal,
        allDrives: state.allDrivesInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setInitialFav: (initialFav) => dispatch({ type: 'SET_INITIAL_FAV', initialFav: initialFav}),
        setInitialAll: (initialAll) => dispatch({ type: 'SET_INITIAL_ALL', initialAll: initialAll}),
        updateLifetimeTotal: (lifetimeTotal) => dispatch({ type: 'UPDATE_LIFETIME_TOTAL', lifetimeTotal: lifetimeTotal}),
        updateMonthTotal: (monthTotal) => dispatch({ type: 'UPDATE_MONTH_TOTAL', monthTotal: monthTotal}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard_1)

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3E3E6",
    //backgroundColor: "#D8EAE2",
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
  },
  overlay: {
    height: imageHeight/4.5,
    alignItems: 'center',
  },
  overlayContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  overlayText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-evenly',
    textAlign: 'justify',
    fontFamily: '$textFont',
    fontSize: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  buttonContainer1: {
    width: imageWidth/3.5,
    height: 40,
    marginLeft:5,
  },
  buttonContainer2: {
    width: imageWidth/3.5,
    height: 40,
    paddingLeft: 10,
  },
  buttonText : {
    color: 'white',
    fontFamily: '$textFont',
  },
  button: {
    backgroundColor: '$buttonBackground',
  }
});


//export default Dashboard_1;




// <Overlay isVisible={this.state.isVisible} onBackdropPress={this.onBackdropPress()}
// overlayStyle={styles.overlay} windowBackgroundColor="rgba(0, 0, 0, .7)">
//   <View style={styles.overlayContent}>
//     <Text style={styles.overlayText}>Congrats on taking the first step towards changing the world! {"\n"}{"\n"}
//     Please select drives to start donating and make a difference.</Text>
//     <View style={styles.buttonGroup}>
//       <Button title="Ok" onPress = {this.onBackdropPress()} containerStyle = {styles.buttonContainer1}
//       titleStyle={styles.buttonText} buttonStyle={styles.button}/>
//     </View>
//   </View>
// </Overlay>
