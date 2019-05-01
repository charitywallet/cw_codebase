import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Signup2 from './screens/Signup2';
import Signup3 from './screens/Signup3';
import Dashboard from './screens/dashboardMain';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
   $primaryBlue: '#92C7C7',
   $teal: '#6FACB4',
   $white: '#fff',
   $border: '#E2E2E2',
   $inputText: 'grey',
   $lightGray: '#F0F0F0',
   $background: "#FFF",
   $buttonBackground: 'grey',
   $LoginScreenText: '#92C7C7',
   $textColor: '#92C7C7',

   //$outline: 1, //Use this to outline containers
});

export default () => <Navigator />;
//export default () => <Dashboard/>;
