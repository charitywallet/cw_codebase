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

    return(
      <View style={{flex: 1,
          alignItems: 'center',
          backgroundColor: '$background'}}>
        <Text style={styles.skip}> SKIP</Text>


          <Text style={styles.introText}>Thanks for signing up, {firstName}! You are almost done. To help us recommend more personalized drives and charities to you,
          please select the causes you really care about.</Text>

          <View style={styles.list}>
          <FlatList
                data=
                {[
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Animals'},
                  {causeImageURL: require('../components/Login_SignUp/images/cancer1.svg')
                  , causeName: 'Cancer'},
                  {causeImageURL: require('../components/Login_SignUp/images/educ.svg')
                  , causeName: 'Education'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Poverty'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Animals'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Cancer'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Education'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Poverty'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Animals'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Cancer'},
                  {causeImageURL: require('../components/Login_SignUp/images/dog-paw.svg')
                  , causeName: 'Education'}
              ]}

                numColumns = {3}
                renderItem={({item}) => (
                    <CausesCards cause={item}/>
              )}
              keyExtractor={(item, index) => index.toString()}
          />

          </View>
          <LoginButton text='Finish' onPress={() => {navigate('UserDashboard')}}/>
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
    },
    list: {
      flex: .92,
    }
});


export default Signup3;
