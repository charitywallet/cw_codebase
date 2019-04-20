import React from 'react';
import Login from './screens/Login';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
   $primaryBlue: '#92C7C7',
   $white: '#fff',
   $border: '#E2E2E2',
   $inputText: '#797979',
   $lightGray: '#F0F0F0',

   //$outline: 1, //Use this to outline containers
});

export default () => <Login/>;
