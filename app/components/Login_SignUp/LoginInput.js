import React from 'react';
import {PropTypes} from 'prop-types';
import { Input } from 'react-native-elements';

import styles from './styles';

const LoginInput = ({text, onChangeText, value}) => {
  return (
    <Input containerStyle={styles.loginInputContainer} inputStyle={styles.loginInputLabel} placeholder={text}
    onChangeText={onChangeText} value={value}/>
  );
};

LoginInput.propTypes = {
  text: PropTypes.any,
  onChangeText: PropTypes.func,
  value: PropTypes.any,
}

export default LoginInput;
