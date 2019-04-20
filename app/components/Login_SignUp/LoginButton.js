import React from 'react';
import {PropTypes} from 'prop-types';
import {Button} from 'react-native-elements';

import styles from './styles';

const LoginButton = ({text}) => {
  return (
    <Button buttonStyle={styles.buttonText} containerStyle={styles.buttonContainer} title={text}/>
  );
};

LoginButton.propTypes = {
  text: PropTypes.any,
}

export default LoginButton;
