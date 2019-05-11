import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width -20)/2;
const cardHeigth = Dimensions.get('window').height/2.8;

export default EStyleSheet.create({
  Container:{
    flex:1,
    backgroundColor: 'white',
    height: cardHeigth,
    minWidth: imageWidth,
    maxWidth: imageWidth,
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    margin: 5,
    paddingBottom: 10,
  },
  driveImage:{
    height: imageWidth,
    width: imageWidth-2,
    overflow:'hidden',
    borderRadius: 10,
  },
  location:{
    paddingTop: 5,
    paddingLeft:4,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color: '$primaryBlue',
    fontFamily: '$headingFont',
  },
  driveTitle:{
    paddingLeft:4,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingBottom: 5,
    fontFamily: '$headingFont',
    height: 48,
  },
  moneyRaised:{
    flexDirection:'row',
    fontFamily: '$textFont',
  },
  currentMoney:{
    paddingLeft:4,
    paddingTop: 5,
    fontFamily: '$textFont',
  },
  textHeartContainer: {
    width: imageWidth-5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
