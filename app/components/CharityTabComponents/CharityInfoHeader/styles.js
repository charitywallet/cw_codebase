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
  locationContainer:{
    flexDirection:'row',
    paddingBottom: 5
  },
  locationPreText:{
    paddingLeft:4,
    paddingBottom: 5,
  },
  location:{
    paddingLeft:4,
    paddingBottom: 5,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color: '$primaryBlue',
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
  },
  charityAbout:{
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
  driveListHeader:{
    paddingTop: 15,
    paddingLeft:10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
