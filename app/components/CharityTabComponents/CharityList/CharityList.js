import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import styles from './styles';

const data=
  [{charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
    , charityName: 'United Way Worldwide', charityId: '1'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/feeding-america_100x100.jpg'
      , charityName: 'Feeding America', charityId: '2'},
    {charityImageURL: 'https://specials-images.forbesimg.com/imageserve/5a32ad2331358e6e1b1d7138/200x200.jpg'
      , charityName: 'Americares Foundation', charityId: '3'},
    {charityImageURL: 'https://specials-images.forbesimg.com/imageserve/5852bc65a7ea431d601b17b9/200x200.jpg'
      , charityName: 'Task Force for Global Health', charityId: '4'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
      , charityName: 'United Way Worldwide', charityId: '5'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
      , charityName: 'United Way Worldwide', charityId: '6'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
      , charityName: 'United Way Worldwide', charityId: '7'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
      , charityName: 'United Way Worldwide', charityId: '8'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
      , charityName: 'United Way Worldwide', charityId: '9'},
    {charityImageURL: 'https://i.forbesimg.com/media/lists/companies/united-way-worldwide_100x100.jpg'
      , charityName: 'United Way Worldwide', charityId: '10'}]

export default class CharityList extends Component {

  constructor(props) {
    super(props);
    //setting default state
    this.state = { search: '' };
  }

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search)
  };

  onPressButton = (text) => {
    console.log(text,' is pressed')
  };

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
        onChangeText={this.updateSearch}
        value={search}
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
      rounded: false
    }}
    chevron
    onPress={() => this.onPressButton(item.charityName)}
  />
  )

  render() {

    return (
        <FlatList
          data= {data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader()}
          />
    );
  }
}
