import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    backgroundColor: 'white'
  },
  date:{
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center'
  },
  amount:{
    paddingTop: 40,
    fontSize: 70,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center'
  },
  bottomText:{
    fontSize: 18,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignContent: 'center'
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
    height:65,
    width:160,
    borderRadius: 18,
  },
});
