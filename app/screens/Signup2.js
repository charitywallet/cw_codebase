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
import {AddPlaidAccount} from '../components/AddCreditCard'

import { Input, Button, SocialIcon, Tooltip } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const imageWidth = Dimensions.get('window').width;

class Signup2 extends Component {

  constructor() {
     super();
     this.state = { isVisible: true }
   };

   handlePressBackdrop = () => {
     this.setState({ isVisible: false });
   }

   handleFillNowButton = () => {
     this.setState({ isVisible: false });
   };

   handleCC = form => console.log(form);

  render() {
    const {navigate} = this.props.navigation;
    const { navigation } = this.props;
    const user_id = JSON.stringify(navigation.getParam('userId', 3));

    return(
      <View style={{flex: 1,}}>
        <Text style={styles.skip} onPress = {() => navigate('UserDashboard')}> SKIP</Text>
        <Container>
        <OverlaySignup userId = {JSON.stringify(user_id)}
         stateInitial={this.state.isVisible} onBackdropPress={this.handlePressBackdrop}
         handleFillNowButton={this.handleFillNowButton}
         handleLaterButton={() => {this.setState({ isVisible: false }); navigate('UserDashboard', {user_id: user_id})}}
         button1="Fill Now" button2="Later"/>

          <LoginInput text='First Name'/>
          <LoginInput text='Last Name'/>
          <AddPlaidAccount navigation={this.props.navigation} user_id={user_id}/>
          <View style={styles.tooltip1}>
            <Tooltip popover={<Text style={{color: '#6FACB4', textAlign: 'center'}}>
                  This is the account we will use to calculate the change from each transaction.</Text>}
                 backgroundColor="#F0F0F0" height={100} width={200}>
              <Ionicons name='ios-information-circle' size={30} color='grey' />
            </Tooltip>
          </View>

          <AddPlaidAccount navigation={this.props.navigation} user_id={user_id}/>
          <View style={styles.tooltip1}>
            <Tooltip popover={<Text style={{color: '#6FACB4', textAlign: 'center'}}>
                  This is the account we will use to calculate the change from each transaction.</Text>}
                 backgroundColor="#F0F0F0" height={100} width={200}>
              <Ionicons name='ios-information-circle' size={30} color='grey' />
            </Tooltip>
          </View>
          <View style={{paddingTop:10,}}>
          <LoginButton text='Next' onPress = {() => navigate('UserSignup3', {user_id: user_id})}/>
          </View>
          <View style={{flexDirection: 'row', width: 25, justifyContent: 'space-between'}}>
            <Dot active={true}/>
            <Dot/>
          </View>

        </Container>
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
    tooltip1: {
      //paddingLeft: 270,
      marginLeft: 310,
      marginTop: -139,
      width:30,
    },
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
