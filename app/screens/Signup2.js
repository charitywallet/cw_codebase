import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {LoginInput, LoginButton} from '../components/Login_SignUp'
import {OverlaySignup} from '../components/OverlaySignup'
import {AddPlaidAccountExternal} from '../components/AddCreditCard'

import { Input, Button, SocialIcon, Tooltip } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const imageWidth = Dimensions.get('window').width;

class Signup2 extends Component {

  constructor() {
     super();
     this.state = {
       isVisible: true,
       firstName: '',
       lastName: '',
       maxDonation: '',
     }
   };

   handlePressBackdrop = () => {
     this.setState({ isVisible: false });
   }

   handleFillNowButton = () => {
     this.setState({ isVisible: false });
   };

   onPressNext = (navigate, user_id) => {
     if (this.state.firstName == ''){
       alert("Please enter a valid First Name")
       return
     }
     navigate('UserSignup3', {user_id: user_id, firstName: this.state.firstName, lastName: this.state.lastName})
   }

  render() {
    const {navigate} = this.props.navigation;
    const { navigation } = this.props;
    const user_id = this.props.navigation.getParam('user_id', 1);

    return(
        <Container>
          <LoginInput text='First Name' onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}/>
          <Text style={styles.required}>*Required</Text>
          <LoginInput text='Last Name' onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}/>
          <Text style={styles.required}></Text>
          {/*<View style={{flexDirection: 'row', marginLeft: 110, width: "100%",}}>
          <LoginInput text='Maximum Monthly Donation' onChangeText={maxDonation => this.setState({ maxDonation })}
                      value={this.state.maxDonation}/>
            <View style={{marginTop: 20,}}>
              <Tooltip popover={<Text style={{color: '#6FACB4', textAlign: 'center'}}>
                    This is the maximum amount you would like to be donated from your account in a month.</Text>}
                   backgroundColor="#F0F0F0" height={100} width={200}>
                <Ionicons name='ios-information-circle' size={30} color='grey' />
              </Tooltip>
            </View>
          </View>*/}
            <AddPlaidAccountExternal navigation={this.props.navigation} user_id={user_id} title="Add Spending Account"/>
            <View style={styles.tooltip1}>
              <Tooltip popover={<Text style={{color: '#6FACB4', textAlign: 'center'}}>
                    This is the account we will use to calculate the change from each transaction.</Text>}
                   backgroundColor="#F0F0F0" height={100} width={200}>
                <Ionicons name='ios-information-circle' size={30} color='grey' />
              </Tooltip>
            </View>
          <Text style={styles.required}></Text>
          <AddPlaidAccountExternal navigation={this.props.navigation} user_id={user_id} title="Add Donation Account"/>
          <View style={styles.tooltip1}>
            <Tooltip popover={<Text style={{color: '#6FACB4', textAlign: 'center'}}>
                  This is the account we will use to donate the collected change for your account.</Text>}
                 backgroundColor="#F0F0F0" height={100} width={200}>
              <Ionicons name='ios-information-circle' size={30} color='grey' />
            </Tooltip>
          </View>
          <Text style={styles.required}></Text>
          <View style={{paddingTop:20,}}>
          <LoginButton text='Next' onPress = {() => this.onPressNext(navigate, user_id)}/>
          </View>
          <View style={{flexDirection: 'row', width: 25, justifyContent: 'space-between'}}>
            <Dot active={true}/>
            <Dot/>
          </View>

        </Container>

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
    tooltip1: {
      //paddingLeft: 270,
      marginLeft: 300,
      marginTop: -95,
      width:30,
      height: 100,
      justifyContent: 'flex-start',
    },
    required: {
      color: '$inputText',
      fontFamily: '$textFont',
      fontSize: 12,
      paddingLeft: 180,
      paddingTop: 5,
      marginBottom: -19,
    }
});


export default Signup2;

//<Text style={styles.newUser} onPress={() => navigate('UserDashboard')}> SKIP</Text>
// <OverlaySignup text = 'Thanks for signing up! There are a few more details we would like you to fill for a better experience.'
//  stateInitial={this.state.isVisible} onBackdropPress={this.handlePressBackdrop}
//  handleFillNowButton={this.handleFillNowButton}
//  handleLaterButton={() => {this.setState({ isVisible: false }); navigate('UserDashboard')}}
//  button1="Fill Now" button2="Later"/>
//  onPress = {() => navigate('UserSignup3')}
// onPress = {() => navigate('UserDashboard')}

//
// <View style={styles.tooltip1}>
//   <Tooltip popover={<Text style={{color: '#6FACB4', textAlign: 'center'}}>
//         This is the account we will use to calculate the change from each transaction.</Text>}
//        backgroundColor="#F0F0F0" height={100} width={200}>
//     <Ionicons name='ios-information-circle' size={30} color='grey' />
//   </Tooltip>
// </View>
