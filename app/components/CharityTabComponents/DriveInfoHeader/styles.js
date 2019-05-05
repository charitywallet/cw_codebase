import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width);


export default EStyleSheet.create({
  Container:{
    flex:1,
    backgroundColor: '$white',
    paddingVertical: 10,
    width: '97.25%',
    alignSelf: 'center',
  },
  charityName:{
    paddingLeft:5,
    fontWeight: 'bold',
    fontSize:25,
    textTransform: 'capitalize',
    paddingBottom: 5,
    paddingTop: 5,
  },
  driveImage:{
    height: imageWidth/2,
    width: imageWidth,
  },
  driveTitle:{
    paddingLeft:10,
    fontWeight: 'bold',
    fontSize:20,
    textTransform: 'capitalize',
    paddingBottom: 5,
    paddingTop: 10,
  },
  location:{
    paddingLeft:10,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color: '$primaryBlue',
  },
  progressBar:{
    paddingLeft:10,
  },
  moneyRaised:{
    flexDirection:'row'
  },
  currentMoney:{
    paddingLeft:10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  targetMoney:{
    paddingTop: 5,
  },
  driveAboutTitle:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    fontWeight: 'bold',
  },
  driveAbout:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    textAlign: 'auto',

  },
  numDonations:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  updateSeparator:{
    height: 10,
    width: "100%",
    backgroundColor: "$blueBackground",
  },
  driveUpdatesHeader:{
    paddingTop: 15,
    paddingLeft:10,
    fontWeight: 'bold',
    fontSize: 16,

  },
});
