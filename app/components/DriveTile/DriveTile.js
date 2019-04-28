import React from 'react';
import {PropTypes} from 'prop-types';
import { Overlay, Button } from 'react-native-elements';
import {View, Text} from 'react-native';

import styles from './styles';

const DriveTile = () => {
  return (
    <View style={styles.container}>
      <Text>Test title</Text>
      <Image source={require('./images/logo.png')} style={styles.image} />
    </View>
  );
};
//
// OverlaySignup.propTypes = {
//   userId: PropTypes.any,
//   stateInitial: PropTypes.any,
//   onBackdropPress: PropTypes.func,
//   handleFillNowButton: PropTypes.func,
//   handleLaterButton: PropTypes.func,
//   button1: PropTypes.any,
//   button2: PropTypes.any,
// }

export default DriveTile;
//<Text>{this.props.deal.title}</Text>
// <Image source={{uri: this.props.deal.largeImageUrl}} style={styles.image} />
