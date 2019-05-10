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
    fontFamily: '$headingFont',
  },
  locationContainer:{
    flexDirection:'row',
    paddingBottom: 5
  },
  locationPreText:{
    paddingLeft:4,
    paddingBottom: 5,
    fontFamily: '$textFont',
  },
  location:{
    paddingLeft:4,
    paddingBottom: 5,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color: '$primaryBlue',
    fontFamily: '$headingFont',
  },
  charityImage:{
    height: imageWidth/2,
    width: imageWidth,
  },
  aboutHolderText:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    fontWeight: 'bold',
    fontFamily: '$headingFont',
  },
  charityAbout:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    paddingBottom: 10,
    textAlign: 'auto',
    fontFamily: '$textFont',
  },
  numDonations:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontStyle:'italic',
    fontFamily: '$headingFont',
  },
  charityNavigatorDetails:{
    width: '95%',
    borderColor: 'black',
    borderWidth: 0.5,
    alignSelf: 'center',
  },
  charityNavigatorDetailsHeader:{
    fontWeight: 'bold',
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
  },
  charityNavigator1:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
  },
  charityNavigator2:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
  },
  charityNavigator3:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  updateSeparator:{
    height: 10,
    width: "100%",
    backgroundColor: "$blueBackground",
  },
  driveListHeader:{
    paddingTop: 15,
    paddingLeft:10,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: '$headingFont',
  },
});
