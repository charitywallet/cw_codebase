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

class Signup3 extends Component {

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
                    <CausesCards cause={item}/>
              )}
              keyExtractor={(item, index) => index.toString()}
          />

          </View>
          <LoginButton text='Finish' onPress={() => {navigate('UserDashboard', {user_id: user_id})}}/>
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
