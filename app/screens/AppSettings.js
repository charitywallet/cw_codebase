import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";

const data = [
  {title: 'About'},
  {title: 'Tax Documents'},
  {title: 'Notification Settings'},
  {title: 'FAQ'},
  {title: 'Disable Donations'},
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

  _onPressItem = (item) => {
    // updater functions are preferred for transactional updates
    // this.setState((state) => {
    //   // copy the map rather than modifying state.
    //   const selected = new Map(state.selected);
    //   selected.set(id, !selected.get(id)); // toggle
    //   return {selected};
    // });
    console.log('id', this.props.user_id)
    if (item.title === 'Logout') {
      function processResponse(response) {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]).then(res => ({
          statusCode: res[0],
          data: res[1]
        }));
      }

      fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/logout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.user_id
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          this.props.navigation.navigate('UserLogin')
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert(error)
      });
    }
  };

  renderItem = ({ item }) => (
  <ListItem
    title={item.title}
    containerStyle={{flex:1,}}
    chevron
    onPress={() => this._onPressItem(item)}
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
