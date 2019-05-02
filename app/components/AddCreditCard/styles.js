import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
    container: {
      flex: .22,
      backgroundColor: '#fff',
      paddingTop: (Platform.OS == 'ios') ? 15 : 0,
      width: imageWidth/1.4,
    },

    viewHolder: {
      paddingVertical: 10,
      width: '90%',
    },

    text: {
      color: 'white',
      fontSize: 25,
      paddingRight: 17
    },

    btn: {
      flexDirection: 'row',
    },

    btnImage: {
      resizeMode: 'contain',
      width: '12.5%',
      height: 35,
      //tintColor: 'white',
    },

    removeBtn: {
      position: 'absolute',
      right: -15,
      top: 18,
      width: 25,
      height: 25,
      // borderRadius: 15,
      // padding: 7,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'white'
    },

    removeIcon: {
      width: '100%',
      // transform: [{ rotate: '45deg' }],
      resizeMode: 'contain'
    },

      creditCardContainer: {
        width: '90%',
      },
      textStyle: {
        color: 'grey',
        paddingTop:9,
        alignItems: 'center',
        fontSize:18,
      },
      plaidOverlay: {
        //height: imageHeight*.9
        //flex: 1,
      }
  });
