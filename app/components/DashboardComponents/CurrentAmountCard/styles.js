import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    backgroundColor: '$background',
    // backgroundColor: '#D8EAE2',
    marginTop: -80,
    paddingTop: 14,
  },
  date:{
    //paddingTop: 14,
    fontSize: 18,
    //fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    color: '$inputText',
    fontFamily: '$textFont',
  },
  amount:{
    paddingTop: 7,
    fontSize: 68,
    fontWeight: '500',
    justifyContent: 'center',
    alignContent: 'center',
    //color: '$inputText',
    opacity: .8,
    fontFamily: '$textFont',
  },
  bottomText:{
    fontSize: 18,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignContent: 'center',
    color: '$inputText',
    //paddingTop: 7,
    fontFamily: '$textFont',
  },
  buttonContainer:
  {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    //flexWrap: "nowrap" ,
    paddingTop: 20,
    //paddingLeft: 20,
  },
  buttonStyle:{
    height:50,
    width: 130,
    //width:'80%',
    borderRadius: 8,
    borderColor: '$primaryBlue',
    backgroundColor: '$primaryBlue',
    // borderColor: '#59B88B',
    // backgroundColor: '#59B88B',
    paddingTop: -20,
    paddingBottom: -20,
  },
  buttonTextStyle:{
    fontFamily: '$textFont',
    fontSize: 15,
  },
});
