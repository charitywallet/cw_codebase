import React from 'react';
import {PropTypes} from 'prop-types';
import {Button} from 'react-native-elements';

import styles from './styles';

const LoginButton = ({text, onPress, disabled}) => {
  return (
    <Button buttonStyle={styles.buttonText} containerStyle={styles.buttonContainer} title={text}
    onPress={onPress} disabled={disabled} disabledStyle={styles.disabledStyle}/>
  );
};

LoginButton.propTypes = {
  text: PropTypes.any,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

export default LoginButton;
