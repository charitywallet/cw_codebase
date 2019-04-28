import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  overlay: {
    height: imageHeight/4,
    alignItems: 'center',
  },
  overlayContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  overlayText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-evenly',
    textAlign: 'justify',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  buttonContainer1: {
    width: imageWidth/3.5,
    height: 40,
    marginLeft:5,
  },
  buttonContainer2: {
    width: imageWidth/3.5,
    height: 40,
    paddingLeft: 10,
  },
  buttonText : {
    color: 'white',
  },
  button: {
    backgroundColor: '$buttonBackground',
  }
});
