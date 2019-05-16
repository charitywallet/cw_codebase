import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  footerText:{
    fontSize:14,
    color: 'rgba(0 ,0 ,0 , 0.38)',
    paddingLeft:15,
  },
  Icon:{
    paddingLeft:10,
    paddingTop:3,
    paddingBottom:3,
    color: "lightblue",
    fontSize: 25,
  },
  driveName:{
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: '$textFont',
  },
  driveNameContainer:{
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  }
});
