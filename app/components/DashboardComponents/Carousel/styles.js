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
      paddingTop: 20,
    },
    textView: {
      alignItems: 'center',
      backgroundColor: "$primaryBlue",
      borderRadius: 4,
      padding: 10,
    },
    cardTitle: {
      fontSize: 18,
      //fontWeight: "bold",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      color: "$lightGray",
      fontFamily: '$textFont',
    },
    cardAmount: {
      fontSize: 44,
      fontWeight: "500",
      color: "$lightGray",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 10,
      fontFamily: '$headingFont',
    },
    cardMessage: {
      fontSize: 18,
      fontWeight: "700",
      color: "$lightGray",
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 15,
      fontFamily: '$headingFont',
    },
});
