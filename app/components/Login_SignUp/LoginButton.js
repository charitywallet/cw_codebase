import React from 'react';
import {PropTypes} from 'prop-types';
import {Button} from 'react-native-elements';

import styles from './styles';

const LoginButton = ({text, onPress}) => {
  return (
    <Button buttonStyle={styles.buttonText} containerStyle={styles.buttonContainer} title={text} onPress={onPress}/>
  );
};

LoginButton.propTypes = {
  text: PropTypes.any,
  onPress: PropTypes.func,
}

export default LoginButton;
