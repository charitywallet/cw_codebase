import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    },
    backgroundImage:{
      width: '100%',
      height: '100%',
    },
    cardContainer:{
      backgroundColor: "#92C7C7"
    },
    carousel: {
      maxHeight: 350,
      maxWidth: "100%",
    },
    textView: {
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 25,
      fontWeight: "bold",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
    },
    cardAmount: {
      fontSize: 50,
      fontWeight: "bold",
      color: "black",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 30,
    },
    cardMessage: {
      fontSize: 17,
      fontWeight: "normal",
      color: "#666",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 15,
    },
});
