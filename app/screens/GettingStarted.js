import React, { Component }  from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Avenir',
  },
  title: {
    fontSize: 24,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Avenir',
  },
});

const slides = [
  {
    key: '1',
    title: 'Welcome to Charity Wallet!',
    text:
      'Making donations has never been easier. Charity Wallet keeps track of the remainder change from your everyday transactions and helps you make a difference in the world.\n\n Make every cent count!',
    image: require('app/components/Logo/images/charity.png'),
    colors: ['#63E2FF', '#B066FE'],
    // colors: ['#FFB88C','#DE6262'],
  },
  {
    key: '2',
    title: 'Donate to a specific Drive \n you care about!',
    text:
      'Donating to drives gives you more transparency into what your money is actually being used for.\n See updates from charities on the progress made. ',
    image: require('./causes/cause1_5x.png'),
    // colors: ['#A3A1FF', '#3A3897'],
    colors: ['#FBD3E9', '#BB377D'],
  },
  {
    key: '3',
    title: 'Easily manage when and how much you donate!',
    text:
      'Choose whether to donate weekly or monthly. Set maximum limits for monthly donations and much more. With Charity Wallet, your money is in your control.',
    image: require('./causes/limits1_5x.png'),
    // colors: ['#A3A1FF', '#3A3897'],
    // colors: ['#F9D423', '#FF4E50'],
    colors: ['#FFEDBC', '#ED4264'],
  },
  {
    key: '4',
    title: 'Make a difference to the world \n One Cent at a Time!',
    text: 'Sign up with Charity Wallet and help make the world a better place. \n\n Join Now!',
    image: require('./causes/spreadlove.png'),
    // colors: ['#29ABE2', '#4F00BC'],
    colors: ['#BFE9FF', '#FF6E7F'],
  },
];

export default class AppIntro extends Component {
  _renderItem = props => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <View style={{height:30}} />
      <Image
        resizeMode = 'contain'
        style={{ backgroundColor: 'transparent', width: 250, height: 250 }}
        source={props.image}
        size={200}
        color="white"
      />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={{height:70}} />
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        //bottomButton
        // showPrevButton
        showSkipButton
        hideNextButton
        // hideDoneButton
        onSkip={() => this.props.navigation.navigate('UserSignup')}
        onDone={() => this.props.navigation.navigate('UserSignup')}
      />
    );
  }
}
