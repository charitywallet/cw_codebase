import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import styles from './styles';

export default class MyFooter extends Component{
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{height: 40, marginBottom:25,}}>
        <Footer>
                <FooterTab>
                  <Button onPress={() => navigate('UserDrives')}>
                    <Icon name="ios-home" />
                  </Button>
                  <Button active onPress={() => navigate('dashboardMain')}>
                    <Icon active name="ios-home" />
                  </Button>
                  <Button onPress={() => navigate('UserLogin')}>
                    <Icon name="settings" />
                  </Button>
                </FooterTab>
        </Footer>
      </View>
    );
  };
};
