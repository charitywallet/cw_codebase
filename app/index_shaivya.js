import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Signup2 from './screens/Signup2';
import Signup3 from './screens/Signup3';
import Dashboard from './screens/dashboardMain';
import PlaidTry from './screens/PlaidTry';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
   //$primaryBlue: '#92C7C7',
   //$primaryBlue: '#4B97A1',
   $primaryBlue: '#258895',
   //$primaryBlue: '#3D96A1',
   $teal: '#6FACB4',
   $white: '#fff',
   $border: '#E2E2E2',
   $inputText: 'grey',
   $lightGray: '#F0F0F0',
   $background: "#FFF",
   $buttonBackground: 'grey',
   $LoginScreenText: '#3D96A1',
   $textColor: '#3D96A1',
   $textFont: 'Avenir',
   $headingFont: 'Avenir',

   //$outline: 1, //Use this to outline containers
});

export default () => <Navigator />;
//export default () => <Dashboard/>;
