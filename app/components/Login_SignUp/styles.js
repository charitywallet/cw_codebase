import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
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
  disabledStyle: {
    opacity: 0.7,
  },
  cardContainer: {
    height: 115,
    width: 85,
    backgroundColor: '$teal',
    opacity: .8,
    marginBottom: 15,
  },
  imageStyle: {
    height: '70%'
  },
  titleStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: "$lightGray"
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -10,
  },
});
