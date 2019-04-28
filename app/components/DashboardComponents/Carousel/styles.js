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
      maxHeight: 250,
      maxWidth: "100%",
    },
    textView: {
      alignItems: 'center',
      backgroundColor: "#92C7C7",
      borderRadius: 4,
    },
    cardTitle: {
      fontSize: 18,
      //fontWeight: "bold",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      color: '$white'
    },
    cardAmount: {
      fontSize: 38,
      fontWeight: "bold",
      color: "$white",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 30,
    },
    cardMessage: {
      fontSize: 18,
      fontWeight: "bold",
      color: "$white",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 15,
    },
});
