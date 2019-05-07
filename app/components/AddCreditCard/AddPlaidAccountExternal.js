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

import PlaidAuthenticator from 'react-native-plaid-link';
import { Overlay, Button } from 'react-native-elements';

import styles from './styles';

const width = Dimensions.get('window').width;

class Item extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.state = { isVisible: true }

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
      <View style={{alignItems: 'left', justifyContent: 'center', padding:8,}}>

<Text style={{fontSize: 14, flex:1, textAlign: 'left', color: 'gray'}}>{this.props.item.accountName} Account added.</Text>

        <View style={{marginTop: -45, paddingLeft: 230, paddingVertical: 10,}}>
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
        </View>
      </Animated.View>
    );
  }
}


class AddPlaidAccountExternal extends Component {
  constructor() {
     super();
     this.state =
     { isVisible: true,
       valueArray: [],
       disabled: false,
       textVisible: false,
       text: '',
       success: false,
       error: false,
       inst_name: '',
     }
     this.addNewEle = false;
     this.index = 0;
   };

   afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  }

  addMore = (navigation) => {
    this.addNewEle = true;
    const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };
    //alert("added");
    //console.log("before", this.state.showPlaid);
    navigation.navigate('PlaidPage', {user_id: this.props.user_id, returnData: this.returnData.bind(this)});
    this.setState({
      //disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue],
      //showPlaid: true,
      isVisible: true,
    });
  //  console.log("after", this.state.showPlaid);

    //navigate('AddAccount');
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

  returnData(data, text, error, inst_name) {
  this.setState({
    data: data,
    textVisible: text,
    error: error,
    inst_name: inst_name});
  console.log("Inst name", inst_name);
  //console.log("data", data);
  console.log("state", this.state)
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
            onPress={() => this.addMore(this.props.navigation)}
          >
            <Image source = { require('./images/add_icon.png') } style = { styles.btnImage }/>
            <Text style={styles.textStyle}>{this.props.title}</Text>
          </TouchableOpacity>

            {this.state.valueArray.map((ele, index) => {
              return (
                <View key={index}>
                {this.state.textVisible ?
                <Item
                  key={ele.id}
                  item={ele}
                  removeItem={(id) => this.remove(id)}
                  afterAnimationComplete={this.afterAnimationComplete}
                  accountName={this.state.inst_name}
                />
                : null }

                </View>
              )
            })}
          </View>
        </ScrollView>

      </View>
    );
  }
}

export default AddPlaidAccountExternal;
