import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = (Dimensions.get('window').width);


export default EStyleSheet.create({
  // Container:{
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  separator:{
    height: 2,
    width: "86%",
    backgroundColor: "black",
    marginLeft: "14%",
  },
});
