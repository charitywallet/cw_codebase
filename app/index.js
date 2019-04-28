import React from 'react';
import Dashboard_1 from './screens/Dashboard_1';
import Home from './screens/Home';
import TabsAdvancedExample from './screens/dashboardMain';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
  //$outline: 1,
});

export default () => <TabsAdvancedExample/>;
