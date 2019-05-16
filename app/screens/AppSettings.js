import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";

const data = [
  {title: 'About'},
  {title: 'Tax Documents'},
  {title: 'Notification Settings'},
  {title: 'FAQ'},
  {title: 'Logout'},
]

export default class CharityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      search: '',
      user_id: this.props.user_id,
    };
    this.arrayholder = [];
  }
  // onPressButton = (charity) => {
  //   //console.log("charities", charity);
  //   this.props.navigation.navigate('CharityInformation', {charity: charity, navigation:this.props.navigation,});
  // };
  //
  // search = text => {
  //   console.log(text);
  // };
  // clear = () => {
  //   this.search.clear();
  // };

  keyExtractor = (item, index) => index.toString()

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };


  renderItem = ({ item }) => (
  <ListItem
    title={item.title}
    containerStyle={{flex:1,}}
    chevron
  />
  )

  render() {


    return (
        <FlatList
          data= {data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          />
    );
  }
}
