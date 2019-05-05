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
  locationContainer:{
    flexDirection:'row',
  },
  locationPreText:{

  },
  location:{
    paddingTop: 3,
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

  },
  charityAbout:{
    paddingLeft:4,
    paddingTop: 8,

  },
  numDonations:{
    paddingLeft:4,
    paddingTop: 8,
    fontWeight: 'bold',
  },
  driveListHeader:{

  },
});
