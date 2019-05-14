import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import styles from './styles';

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

componentDidMount() {
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/get_charities', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     //user_id: 1,
   }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        this.setState({
          charities: data.charities,
          isLoading: false,
          dataSource: data.charities,
        },
        function() {
          this.arrayholder = data.charities;
        }
      )
      } else {
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });
  }

  onPressButton = (charity) => {
    //console.log("charities", charity);
    this.props.navigation.navigate('CharityInformation', {charity: charity, navigation:this.props.navigation,});
  };

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.charityName ? item.charityName.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }


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

  renderHeader = () => {

    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        value={this.state.search}
        autoCorrect={false}
        platform="ios"
      />
    )
  };

  renderItem = ({ item }) => (
  <ListItem
    title={item.charityName}
    leftAvatar={{
      source: { uri: item.charityImageURL },
      rounded: false,
    }}
    containerStyle={{flex:1,}}
    imageProps={{resizeMode: 'contain'}}
    chevron
    onPress={() => this.onPressButton(item)}
  />
  )

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
        <FlatList
          data= {this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader()}
          />
    );
  }
}
