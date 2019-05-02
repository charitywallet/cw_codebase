import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width);


export default EStyleSheet.create({
  Container:{
    flex:1
  },
  charityName:{
    paddingLeft:4,
    fontWeight: 'bold',
    fontSize:25,
    textTransform: 'capitalize',
    paddingBottom: 5,
  },
  driveImage:{
    height: imageWidth/2,
    width: imageWidth,
  },
  location:{
    paddingTop: 3,
    paddingLeft:4,
    paddingBottom: 5,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color: '$primaryBlue',
  },
  driveTitle:{
    paddingLeft:4,
    fontWeight: 'bold',
    fontSize:18,
    textTransform: 'capitalize',
    paddingBottom: 5,
  },
  moneyRaised:{
    flexDirection:'row'
  },
  currentMoney:{
    paddingLeft:4,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  targetMoney:{
    paddingTop: 5,
  },
  driveAbout:{
    paddingLeft:4,
    paddingTop: 8,

  },
  numDonations:{
    paddingLeft:4,
    paddingTop: 8,
    fontWeight: 'bold',
  },
  driveUpdatesHeader:{

  },
});
