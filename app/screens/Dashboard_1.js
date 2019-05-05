import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Carousel} from '../components/DashboardComponents/Carousel'
import {CurrentAmountCard} from '../components/DashboardComponents/CurrentAmountCard';

const imageWidth = Dimensions.get('window').width;

class Dashboard_1 extends Component {

  state = {
    user_id: this.props.user_id,
    active_charities: '',
    active_drives: '',
    month_total: '',
    lifetime_total: '',
    drives_supported: false,
  }

componentDidMount() {
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/get_user_totals', {
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
        this.setState({
          active_charities: data.totals.active_charities,
          active_drives: data.totals.active_drives,
          month_total: data.totals.month_total,
          lifetime_total: data.totals.lifetime_total,
        })
        if (data.totals.active_drives < 1) {
          this.setState({
            drives_supported: false,
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
        : <View style={styles.container}>
          <Text style={{fontSize: 20,}}>Please select drives to start donating. </Text>
          <Text onPress = {() => this.props.navigation.navigate('UserDrives')}>Select Drives</Text>
        </View>}
        </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3E3E6",
    //marginTop: -15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  currencyCardContainer: {
    width: imageWidth,
    paddingTop: 74.5,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: .3,
    height: 250,
  },
  carouselContainer: {
    width: imageWidth,
    backgroundColor: 'white',
    marginTop: 22.5,
    height: 280,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: .3,
  }
});


export default Dashboard_1;
