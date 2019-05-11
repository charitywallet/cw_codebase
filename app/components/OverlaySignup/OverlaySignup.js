import React from 'react';
import {PropTypes} from 'prop-types';
import { Overlay, Button } from 'react-native-elements';
import {View, Text} from 'react-native';

import styles from './styles';

const OverlaySignup = ({
  userId,
  stateInitial,
  onBackdropPress,
  handleFillNowButton,
  handleLaterButton,
  button1,
  button2,
}) => {
  return (
    <Overlay isVisible={stateInitial} onBackdropPress={onBackdropPress}
    overlayStyle={styles.overlay} windowBackgroundColor="rgba(0, 0, 0, .7)">
      <View style={styles.overlayContent}>
        <Text style={styles.overlayText}>Thank you for signing up! There are a few more details we would like you to fill for a better experience.</Text>
        <View style={styles.buttonGroup}>
          <Button title={button1} onPress = {handleFillNowButton} containerStyle = {styles.buttonContainer1}
          titleStyle={styles.buttonText} buttonStyle={styles.button}/>
        </View>
      </View>
    </Overlay>
  );
};

OverlaySignup.propTypes = {
  userId: PropTypes.any,
  stateInitial: PropTypes.any,
  onBackdropPress: PropTypes.func,
  handleFillNowButton: PropTypes.func,
  button1: PropTypes.any,
  button2: PropTypes.any,
}

export default OverlaySignup;
