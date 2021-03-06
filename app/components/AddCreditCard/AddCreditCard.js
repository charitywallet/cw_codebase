import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

import styles from './styles';

const width = Dimensions.get('window').width;

class Item extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);

    if( Platform.OS === 'android' ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.item.id !== this.props.item.id) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.afterAnimationComplete();
    });
  }

  removeItem = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.removeItem(this.props.item.id);
    });
  }

  render() {
    const translateAnimation = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-width, 0, width]
    });

    const opacityAnimation = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <Animated.View style={[
         styles.viewHolder, {
          transform: [{ translateX: translateAnimation}],
          opacity: opacityAnimation
        }]}
      >
        <View>
          <LiteCreditCardInput onChange={this.handleCC} inputStyle={styles.creditCardContainer}/>
        </View>
        <View style={{marginTop: -49, marginLeft: -85, paddingVertical: 10,}}>
          <TouchableOpacity
            style={styles.removeBtn}
            onPress={this.removeItem}
          >
            <Image
              source={require('./images/remove_icon.png')}
              style={styles.removeIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}


class AddCreditCard extends Component {
  constructor() {
     super();
     this.state = { isVisible: true, valueArray: [], disabled: false }
     this.addNewEle = false;
     this.index = 0;
   };

   handleCC = form => console.log(form);

   afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  }

  addMore = () => {
    this.addNewEle = true;
    const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };
    
    this.setState({
      disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue]
    });
  }

  remove(id) {
    this.addNewEle = false;
    const newArray = [...this.state.valueArray];
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);

    this.setState(() => {
      return {
        valueArray: newArray
      }
    }, () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView
          ref={scrollView => this.scrollView = scrollView}
          onContentSizeChange={()=> {
            this.addNewEle && this.scrollView.scrollToEnd();
          }}
        >
          <View style={{ flex: 1, padding: 4 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            disabled={this.state.disabled}
            onPress={this.addMore}
          >
            <Image source = { require('./images/add_icon.png') } style = { styles.btnImage }/>
            <Text style={styles.textStyle}> Add Spending Account </Text>
          </TouchableOpacity>
            {this.state.valueArray.map(ele => {
              return (
                <Item
                  key={ele.id}
                  item={ele}
                  removeItem={(id) => this.remove(id)}
                  afterAnimationComplete={this.afterAnimationComplete}
                />
              )
            })}
          </View>
        </ScrollView>

      </View>
    );
  }
}

export default AddCreditCard;
