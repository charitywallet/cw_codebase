import React from 'react';
import {PropTypes} from 'prop-types';
import { Input } from 'react-native-elements';

import styles from './styles';

const LoginInput = ({text}) => {
  return (
    <Input containerStyle={styles.container} inputStyle={styles.label} placeholder={text}/>
  );
};

LoginInput.propTypes = {
  text: PropTypes.any,
}

export default LoginInput;
