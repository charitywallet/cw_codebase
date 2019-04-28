import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    backgroundColor: 'white',

  },
  container_tile:{
    width: '100%',
  },
  values:{
    fontSize: 100,
    fontWeight: 'bold',
  },
  detail:{
    //paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center'
  },
});
