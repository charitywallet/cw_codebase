import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, StatusBar, KeyboardAvoidingView, Text, StyleSheet,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import { Slider } from "react-native-elements";
import ModalSelector from 'react-native-modal-selector';

const donationFrequency = ['Weekly','Bi-Weekly','Monthly']

class Limits extends Component {
  constructor() {
     super();
     this.state = { maxAmountValue: 20
       , minAmountValue: 5
       , donationFrequency: 'Monthly'
       , roundingMethod: 'Round-Up'
       , minTxValue: 2}
   };

   static navigationOptions = {
    title: 'Details',
  };

  render() {
     let index = 0;
     const data = [
           { key: index++, label: 'Weekly' },
           { key: index++, label: 'Bi-Weekly' },
           { key: index++, label: 'Monthly' },
          ];
    let index_1 = 0;
    const dataRoundingMethod = [
          { key: index_1++, label: 'Round-Up' },
          { key: index_1++, label: 'Round-Down' },
          { key: index_1++, label: 'Round to the Nearest Dollar' },
         ];
    return(
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.questionStyle}>How often would you like to donate?</Text>
          <ModalSelector
            data={data}
            initValue={this.state.donationFrequency}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option)=>{ this.setState({donationFrequency:option.label})}}
            cancelText={'Close'}
            >
            <TextInput
                style={styles.textInput}
                editable={false}
                value={this.state.donationFrequency} />
          </ModalSelector>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.questionStyle}>Maximum amount to be donated every cycle?</Text>
        <View style={styles.itemSubContainer}>
          <View style={styles.sliderContainer}>
            <Slider
              value={this.state.maxAmountValue}
              step={5}
              onValueChange={maxAmountValue => this.setState({ maxAmountValue })}
              maximumValue={100}
              minimumValue={5}
              minimumTrackTintColor='#258895'
              thumbTintColor='#258895'
            />
          </View>
          <Text style={styles.valueStyle}>${this.state.maxAmountValue}</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.questionStyle}>Minimum amount to be donated every cycle?</Text>
        <View style={styles.itemSubContainer}>
          <View style={styles.sliderContainer}>
            <Slider
              value={this.state.minAmountValue}
              step={5}
              onValueChange={minAmountValue => this.setState({ minAmountValue })}
              maximumValue={100}
              minimumValue={5}
              minimumTrackTintColor='#258895'
              thumbTintColor='#258895'
            />
          </View>
          <Text style={styles.valueStyle}>${this.state.minAmountValue}</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.questionStyle}>Minimum transaction amount above which change should be collected into Charity Wallet?</Text>
        <View style={styles.itemSubContainer}>
          <View style={styles.sliderContainer}>
            <Slider
              value={this.state.minTxValue}
              step={1}
              onValueChange={minTxValue => this.setState({ minTxValue })}
              maximumValue={10}
              minimumValue={0}
              minimumTrackTintColor='#258895'
              thumbTintColor='#258895'
            />
          </View>
          <Text style={styles.valueStyle}>${this.state.minTxValue}</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.questionStyle}>How would you like to collect change?</Text>
        <ModalSelector
                    data={dataRoundingMethod}
                    initValue={this.state.roundingMethod}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({roundingMethod:option.label})}}
                    cancelText={'Close'}
                    >
                    <TextInput
                        style={styles.textInput}
                        editable={false}
                        value={this.state.roundingMethod} />
        </ModalSelector>
      </View>
    </View>
    );
  }
}

export default Limits;


const styles= EStyleSheet.create({
    container: {
      flex: 1, //full screen
      alignItems: 'center',
      justifyContent:'space-between',
      backgroundColor: '$blueBackground',
      flexDirection:'column',
      paddingVertical: 5,
    },
    itemContainer: {
      width: '97.5%',
      backgroundColor: '$white',
      paddingVertical: 10,
      borderRadius: 6,
      paddingLeft: 5,
      height: 117,
      justifyContent:'space-around',
    },
    itemSubContainer: {
      flexDirection:'row',
      justifyContent:'space-around',
      // width: '97.5%',
      // backgroundColor: '$white',
      // paddingVertical: 10,
      // borderRadius: 6,
      // paddingLeft: 5,
      // height: 200,
    },
    questionStyle:{
      fontFamily: "$textFont",
      fontSize: 16,
    },
    valueStyle:{
      fontFamily: "$textFont",
      fontSize: 20,
      paddingVertical: 6,
    },
    textInput:{
      borderWidth:1,
      borderColor:'#ccc',
      padding:5,
      height:30,
      width:200,
      alignSelf: 'center',
    },
    sliderContainer:{
      width:250,
    },
});
