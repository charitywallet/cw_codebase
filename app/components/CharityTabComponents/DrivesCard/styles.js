import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width -20)/2;
const cardHeigth = Dimensions.get('window').height/3;

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
    // borderColor: 'gray',
    // borderWidth: 1,
    // borderRadius: 10
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
  },
  driveTitle:{
    paddingLeft:4,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  // driveAbout:{
  //   flex: {1},
  //   fontSize: {25}
  // },
  moneyRaised:{
    flexDirection:'row'
  },
  currentMoney:{
    paddingLeft:4,
  },
  targetMoney:{

  },
});
