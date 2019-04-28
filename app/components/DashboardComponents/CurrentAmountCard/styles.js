import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    backgroundColor: '$background',
    marginTop: -100,
  },
  date:{
    fontSize: 16,
    //fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    color: '$inputText',
  },
  amount:{
    paddingTop: 10,
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    //color: '$inputText',
    opacity: .8,
  },
  bottomText:{
    fontSize: 16,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignContent: 'center',
    color: '$inputText',
    paddingTop: 10,
  },
  buttonContainer:
  {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    flexWrap: "wrap" ,
    paddingTop: 30,
  },
  buttonStyle:{
    height:40,
    width: 120,
    //width:160,
    borderRadius: 8,
    borderColor: '$primaryBlue',
    backgroundColor: '$primaryBlue',
  },
});
