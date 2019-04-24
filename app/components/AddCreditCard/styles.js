import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
    container: {
      flex: .2,
      backgroundColor: '#fff',
      //justifyContent: 'center',
      paddingTop: (Platform.OS == 'ios') ? 5 : 0,
      //paddingLeft: 50,
      width: imageWidth/1.5,
    },

    viewHolder: {
      paddingVertical: 10,
      //backgroundColor: '$primaryBlue',
      //justifyContent: 'center',
      //alignItems: 'flex-start',
      // margin: 4,
      // paddingLeft: 15,
      // borderRadius: 10
    },

    text: {
      color: 'white',
      fontSize: 25,
      paddingRight: 17
    },

    btn: {
      // position: 'absolute',
      // right: 25,
      // bottom: 25,
      // borderRadius: 30,
      // width: 60,
      // height: 60,
      // justifyContent: 'center',
      // alignItems: 'center',
      //backgroundColor: 'rgba(0,0,0,0.7)',
      //padding: 15
      flexDirection: 'row',
    },

    btnImage: {
      resizeMode: 'contain',
      width: '15%',
      height: 35,
      //tintColor: 'white',
    },

    removeBtn: {
      position: 'absolute',
      right: 13,
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
        // paddingTop: 15,
        // width: '50%',
        // paddingLeft: 20,
        // paddingRight: 20,
        // marginRight: 20,
      },
      addButtonContainer: {
        paddingLeft: 20,
      },
  });
