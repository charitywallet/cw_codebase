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
    //const {navigate} = this.props.navigation;

    return(
      <View style={{flex: 1,
          alignItems: 'center',
          backgroundColor: '$background'}}>
        <Text style={styles.skip}> SKIP</Text>


          <Text style={styles.introText}>Almost done! To help us recommend more personalized drives and charities to you,
          please select the causes you really care about.</Text>

          <View>
          <FlatList
                data={[{causeImageURL: './images/animals.jpg'
                , causeName: 'Animals'},
                {causeImageURL: './images/animals.jpg'
                , causeName: 'Cancer'},
                {causeImageURL: './images/animals.jpg'
                , causeName: 'Education'},
                {causeImageURL: './images/animals.jpg'
                , causeName: 'Poverty'}]}
                numColumns = {3}
                renderItem={({item}) => (
                <CausesCards/>
              )}
              keyExtractor={(item, index) => index.toString()}
          />
          </View>

          <LoginButton text='Finish'/>
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
      width: 300,
      fontSize: 18,
      paddingTop: 25,
      fontWeight: '300',
      color: '$inputText',
      textAlign: 'justify',
    },
});


export default Signup3;


// <View style={{flex: 1,}}>
// <FlatList
//   data={[{title: 'Title Text', id: 'item1'}, {title: 'Title Text123', id: 'item2'}]}
//   extraData={this.state}
//   keyExtractor={this._keyExtractor}
//   renderItem={this._renderItem}
// />
// </View>
// <LoginButton text='Finish' onPress={() => {navigate('UserDashboard')}}/>
