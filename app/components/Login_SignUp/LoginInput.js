import React from 'react';
import {PropTypes} from 'prop-types';
import { Input } from 'react-native-elements';

import styles from './styles';

const LoginInput = ({text, onChangeText, value, autoCapitalize, secureTextEntry}) => {
  return (
    <Input containerStyle={styles.loginInputContainer} inputStyle={styles.loginInputLabel} placeholder={text}
    onChangeText={onChangeText} value={value} autoCapitalize={autoCapitalize} autoCorrect={false} secureTextEntry={secureTextEntry}/>
  );
};

LoginInput.propTypes = {
  text: PropTypes.any,
  onChangeText: PropTypes.func,
  value: PropTypes.any,
  autoCapitalize: PropTypes.any,
  secureTextEntry: PropTypes.bool,
}

export default LoginInput;
