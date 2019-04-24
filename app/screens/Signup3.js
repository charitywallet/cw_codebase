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
import {AddCreditCard} from '../components/AddCreditCard'

import { Input, Button, SocialIcon } from 'react-native-elements';

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const imageWidth = Dimensions.get('window').width;

class Signup3 extends Component {

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

  //  handleLaterButton = () => {
  //    navigate('UserDashboard');
  //  };

   handleCC = form => console.log(form);

  render() {
    //const {navigate} = this.props.navigation;
    return(
      <View style={{flex: 1,}}>
        <Text style={styles.skip}> SKIP</Text>
        <Container>
          <Text style={{width: 300, fontSize: 18,}}> Almost done! To help us recommend more personalized drives and charities to you,
          tell us about the causes you really care about.</Text>
          <Text>Please select up to 5</Text>

          <LoginButton text='Finish'/>
          <View style={{flexDirection: 'row', width: 25, justifyContent: 'space-between'}}>
            <Dot/>
            <Dot active={true}/>
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
      paddingTop: 30,
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
});


export default Signup3;

//<Text style={styles.newUser} onPress={() => navigate('UserDashboard')}> SKIP</Text>

// onPress = {() => navigate('UserDashboard')}
