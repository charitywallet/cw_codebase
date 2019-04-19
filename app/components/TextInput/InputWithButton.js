import React from 'react';
import {PropTypes} from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const {onPress, buttonText, editable} = props;

  const containerStyles = [styles.container];

  if (editable === false){
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight underlayColor={color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier)} style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View styles={styles.border}/>
      <TextInput style = {styles.input} {...props}/>
    </View>
)
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton;
