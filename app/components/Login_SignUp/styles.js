import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  //$buttonBackgroundColorModifier: 0.1,
  loginInputContainer: {
    width: "70%",
    paddingTop: 15,
  },
  loginInputLabel: {
    paddingLeft: 15,
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  buttonText: {
    width: '80%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '$buttonBackground',
  },
  buttonContainer: {
    paddingTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  // buttonText: {
  //   fontWeight: '600',
  //   fontSize: 20,
  //   paddingHorizontal: 16,
  //   color: '$primaryBlue',
  // },
  // buttonContainer: {
  //   height: INPUT_HEIGHT,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '$white',
  //   borderTopLeftRadius: BORDER_RADIUS,
  //   borderBottomLeftRadius: BORDER_RADIUS,
  // },
  // input: {
  //   height: INPUT_HEIGHT,
  //   flex: 1,
  //   fontSize: 18,
  //   paddingHorizontal: 8,
  //   color: '$inputText'
  // },
  // border: {
  //   height: INPUT_HEIGHT,
  //   width: StyleSheet.hairlineWidth,
  //   backgroundColor: '$border'
  // },
});
