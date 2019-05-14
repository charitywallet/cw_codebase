import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton, CausesCards} from '../components/Login_SignUp'

const imageWidth = Dimensions.get('window').width;

var causesChosen = []

class Signup3 extends Component {

  func = (smh) => {
    causesChosen = smh;
  }

  onPressFinish = (user_id, navigate) => {
    //console.log("finish", causesChosen)
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/select_causes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: user_id,
      causes: causesChosen,
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
    //navigate('UserDashboard', {user_id: user_id})
    navigate('RecommendedDrives', {user_id: user_id})
  }

  render() {
    const {navigate} = this.props.navigation;
    const firstName = this.props.navigation.getParam('firstName', 'User');
    const user_id = this.props.navigation.getParam('user_id', 1);

    return(
      <View style={{flex: 1,
          alignItems: 'center',
          backgroundColor: '$background'}}>
          <Text style={styles.introText}>Thanks for signing up, {firstName}! You are almost done. In order to help us recommend more personalized drives and charities to you,
          please select the causes you really care about.</Text>

          <View style={styles.list}>
          <FlatList
                data=
                {[
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Animals'},
                  {causeImageURL: require('../components/Login_SignUp/images/cancer1.svg')
                  , causeName: 'Cancer'},
                  {causeImageURL: require('../components/Login_SignUp/images/child.svg')
                  , causeName: 'Children'},
                  {causeImageURL: require('../components/Login_SignUp/images/civil.svg')
                  , causeName: 'Civil Rights'},
                  {causeImageURL: require('../components/Login_SignUp/images/environment.svg')
                  , causeName: 'Environment'},
                  {causeImageURL: require('../components/Login_SignUp/images/educ.svg')
                  , causeName: 'Education'},
                  {causeImageURL: require('../components/Login_SignUp/images/health.svg')
                  , causeName: 'Health'},
                  {causeImageURL: require('../components/Login_SignUp/images/homeless.svg')
                  , causeName: 'Homeless'},
                  {causeImageURL: require('../components/Login_SignUp/images/food.svg')
                  , causeName: 'Hunger'},
                  {causeImageURL: require('../components/Login_SignUp/images/flag.svg')
                  , causeName: 'LGBTQ'},
                  {causeImageURL: require('../components/Login_SignUp/images/world.svg')
                  , causeName: 'International'},
                  {causeImageURL: require('../components/Login_SignUp/images/policy.svg')
                  , causeName: 'Public Policy'},
                  {causeImageURL: require('../components/Login_SignUp/images/religion.svg')
                  , causeName: 'Religion'},
                  {causeImageURL: require('../components/Login_SignUp/images/women.svg')
                  , causeName: 'Women'}
              ]}

                numColumns = {3}
                renderItem={({item}) => (
                    <CausesCards cause={item} func={this.func}/>
              )}
              keyExtractor={(item, index) => index.toString()}
          />

          </View>
          <LoginButton text='Finish' onPress={() => this.onPressFinish(user_id, navigate)}/>
          <View style={{flexDirection: 'row', width: 25, justifyContent: 'space-between'}}>
            <Dot/>
            <Dot active={true}/>
          </View>

      </View>
    );
  }
}

const Dot = (props) => {
  let currentStyle = props.active ? styles.dotActive : styles.dotInactive;
  return (
    <View style={[styles.dot, currentStyle]}></View>
  );
};

const styles = EStyleSheet.create({
    skip: {
      paddingTop: 20,
      paddingLeft: 320,
      color: '$textColor',
      fontWeight: 'bold'
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    dotActive: {
      //backgroundColor: '#FC3768',
      backgroundColor: '$primaryBlue'
    },
    dotInactive: {
      backgroundColor: '#D2D2D4',
    },
    introText: {
      width: 290,
      fontSize: 18,
      paddingTop: 25,
      paddingBottom: 15,
      //fontWeight: '300',
      color: '$inputText',
      textAlign: 'justify',
      fontFamily: '$textFont',
    },
    list: {
      flex: .92,
    }
});


export default Signup3;

// <Text style={styles.skip} onPress = {() => navigate('UserDashboard', {user_id: user_id})}> SKIP</Text>
