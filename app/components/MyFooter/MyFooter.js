import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import styles from './styles';

const MyFooter = () => {
  return (
  <View>
    <Footer>
            <FooterTab>
              <Button>
                <Icon name="charity" />
              </Button>
              <Button active>
                <Icon active name="ios-home" />
              </Button>
              <Button>
                <Icon name="settings" />
              </Button>
            </FooterTab>
    </Footer>
  </View>
);
};

export default MyFooter;
