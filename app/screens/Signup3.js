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
import {LoginInput, LoginButton} from '../components/Login_SignUp'

const imageWidth = Dimensions.get('window').width;

class Signup3 extends Component {

  render() {
    const {navigate} = this.props.navigation;

    return(
      <View style={{flex: 1,}}>
        <Text style={styles.skip}> SKIP</Text>
        <Container>

          <Text style={{width: 300, fontSize: 18,}}> Almost done! To help us recommend more personalized drives and charities to you,
          tell us about the causes you really care about.</Text>
          <Text>Please select up to 5</Text>

          <LoginButton text='Finish' onPress={() => {navigate('UserDashboard')}}/>
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


// <View style={{flex: 1,}}>
// <FlatList
//   data={[{title: 'Title Text', id: 'item1'}, {title: 'Title Text123', id: 'item2'}]}
//   extraData={this.state}
//   keyExtractor={this._keyExtractor}
//   renderItem={this._renderItem}
// />
// </View>
