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
  driveTitle:{
    paddingLeft:10,
    paddingRight:5,
    fontWeight: 'bold',
    fontSize:25,
    textTransform: 'capitalize',
    paddingBottom: 10,
    paddingTop: 5,
    fontFamily: '$headingFont',
  },
  driveImage:{
    height: imageWidth/2,
    width: imageWidth,
  },
  charityName:{
    paddingLeft:10,
    fontSize:16,
    textTransform: 'capitalize',
    paddingBottom: 5,
    fontFamily: '$headingFont',
    // paddingTop: 5,
  },
  location:{
    paddingLeft:10,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color: '$primaryBlue',
    fontFamily: '$headingFont',
  },
  progressBar:{
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
  },
  driveProgressText:{
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  moneyRaised:{
    flexDirection:'row',
    fontFamily: '$headingFont',
  },
  currentMoney:{
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily: '$textFont',
  },
  targetMoney:{
    paddingTop: 5,
  },
  driveAboutTitle:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    fontWeight: 'bold',
    fontFamily: '$headingFont',
  },
  driveAbout:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'auto',
    fontFamily: '$textFont',
  },
  charityNavigatorDetails:{
    fontFamily: '$textFont',
  },
  charityNavigatorDetailsHeader:{
    fontWeight: 'bold',
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    fontFamily: '$headingFont',
  },
  charityNavigator1:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 6,
    fontFamily: '$textFont',
  },
  charityNavigator2:{
    paddingLeft:10,
    paddingRight:10,
    fontFamily: '$textFont',

  },
  charityNavigator3:{
    paddingLeft:10,
    paddingRight:10,
    paddingBottom: 8,
    fontFamily: '$textFont',
  },
  numDonations:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontStyle:'italic',
    fontFamily: '$textFont',
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
    fontFamily: '$headingFont',

  },
});
