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
          { key: index_1++, label: 'Round to the nearest dollar' },
         ];
    return(
      <View style={{flex:1, flexDirection:'column'}}>
        <Text>How often would you like to donate?</Text>
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
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:40}}
                        editable={false}
                        value={this.state.donationFrequency} />
                </ModalSelector>


        <Text>Maximum amount to be donated every cycle?</Text>
        <Slider
          value={this.state.maxAmountValue}
          step={5}
          onValueChange={maxAmountValue => this.setState({ maxAmountValue })}
          maximumValue={100}
          minimumValue={5}
          minimumTrackTintColor='#258895'
          thumbTintColor='#258895'
        />
        <Text>Value:$ {this.state.maxAmountValue}</Text>
        <Text>Minimum amount to be donated every cycle?</Text>
        <Slider
          value={this.state.minAmountValue}
          step={5}
          onValueChange={minAmountValue => this.setState({ minAmountValue })}
          maximumValue={100}
          minimumValue={5}
          minimumTrackTintColor='#258895'
          thumbTintColor='#258895'
        />
        <Text>Value:$ {this.state.minAmountValue}</Text>
        <Text>Minimum tx amount above which change should be collected? [Slider/text input]</Text>
        <Slider
          value={this.state.minTxValue}
          step={1}
          onValueChange={minTxValue => this.setState({ minTxValue })}
          maximumValue={10}
          minimumValue={0}
          minimumTrackTintColor='#258895'
          thumbTintColor='#258895'
        />
        <Text>Value:$ {this.state.minTxValue}</Text>
        <Text>How would you like to collect change?</Text>
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
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:40}}
                        editable={false}
                        value={this.state.roundingMethod} />
                </ModalSelector>
      </View>
    );
  }
}

export default Limits;
