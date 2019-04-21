import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
   $primaryBlue: '#92C7C7',
   $white: '#fff',
   $border: '#E2E2E2',
   $inputText: '#797979',
   $lightGray: '#F0F0F0',
   $background: "#FFF",
   $buttonBackground: 'grey',
   $LoginScreenText: '#92C7C7',

   //$outline: 1, //Use this to outline containers
});

export default () => <Navigator />;
