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

  handlePressBackdrop = () => {
    this.setState({ isVisible: false });
  }

  onMessage = (data) => {
    console.log("data", data);
    this.setState({data})
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
        <Overlay isVisible={this.state.isVisible} onBackdropPress={this.handlePressBackdrop}>
        <PlaidAuthenticator
         onMessage={this.onMessage}
         publicKey="0cfea3b8cf3611b374aecb1a215a39"
         env="sandbox"
         product="transactions"
         clientName="CharityWallet"
         selectAccount={false}
         style={{flex:1,}}
       />
        </Overlay>

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
     this.state =
     { isVisible: true,
       valueArray: [],
       disabled: false,
       isVisible: true,
       textVisible: false,
       text: '',
       success: false,
     }
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
    //alert("added");
    //console.log("before", this.state.showPlaid);
    this.setState({
      //disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue],
      //showPlaid: true,
      isVisible: true,
    });
  //  console.log("after", this.state.showPlaid);

    //navigate('AddAccount');
  }

  onMessage = (data) => {
    //console.log("data", data);
    this.setState({data});
    //console.log("Data", data);
    // if (this.state.data && this.state.data.metadata && this.state.data.metadata.pulic_token) {
    //   console.log(this.state.data.metadata.pulic_token);
    // }
    // if (this.state.data && this.state.data.metadata && this.state.data.metadata.pulic_token) {
    //   console.log(this.state.data.metadata.institution_name);
    //   this.setState({
    //     text: this.state.data.metadata.institution_name,
    //     textVisible: true,
    //   })
    // }
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

  handlePressBackdrop = () => {
    this.setState({ isVisible: false });
    //console.log(this.state);
  }

  handleFinishButton = () => {
    //console.log(this.state);
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/set_ptoken', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //user_id: this.state.user_id,
      user_id: this.props.user_id,
      public_token: this.state.data.metadata.public_token,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        this.setState({
          success: true,
        })
        //console.log("public_token", this.state.data.metadata.public_token);
        //console.log("user id", this.props.user_id);
      } else {
        this.setState({
          success: false,
        })
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });
    this.setState({ isVisible: false });
  }

  render() {
    //const {navigate} = this.props.navigation;
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
            onPress={() => this.addMore()}
          >
            <Image source = { require('./images/add_icon.png') } style = { styles.btnImage }/>
            <Text style={styles.textStyle}> Add Spending Account </Text>
          </TouchableOpacity>

            {this.state.valueArray.map((ele, index) => {
              return (
                <View key={index}>
                  <Overlay isVisible={this.state.isVisible} onBackdropPress={this.handlePressBackdrop}>
                    <PlaidAuthenticator
                     onMessage={this.onMessage}
                     publicKey="0cfea3b8cf3611b374aecb1a215a39"
                     env="sandbox"
                     product="transactions"
                     clientName="CharityWallet"
                     selectAccount={false}
                   />
                   <View>
                   {this.state.data && this.state.data.metadata &&
                     this.state.data.metadata.public_token ?
                     <View style={{justifyContent:'center', marginBottom: 300, alignItems:'center'}}>
                        <Text style={{paddingBottom: 50,}}>{this.state.data.metadata.institution_name} Account added! {this.state.data.metadata.public_token}</Text>
                        <Button containerStyle={{}} key={index} title="Finish" titleStlye={{color:'white'}} onPress={this.handleFinishButton}/>
                     </View>: null }
                   </View>
                  </Overlay>
                </View>
              )
            })}
          </View>
        </ScrollView>

      </View>
    );
  }
}

export default AddCreditCard;

// <Item
//   key={ele.id}
//   item={ele}
//   removeItem={(id) => this.remove(id)}
//   afterAnimationComplete={this.afterAnimationComplete}
// />
// {this.state.data && <Text>{this.state.data.institution.name}</Text>}
