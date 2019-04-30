import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width/1.8;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'flex-start',
    //justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    marginTop: -90,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$primaryBlue',
  }
});
