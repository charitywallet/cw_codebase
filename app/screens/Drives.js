import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchBar} from 'react-native-elements';

//The data below needs to be called using an API
// const driveData = [
//   {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
// , driveCity: 'Berkeley, CA'
// , driveTitle: 'Help Detective Pikachu'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.8},
// {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
// , driveCity: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.3},
// {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
// , driveCity: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.3},
// {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
// , driveCity: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.5},
// {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
// , driveCity: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.8},
// {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
// , driveCity: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
// , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
// , currentMoney: '450'
// , targetMoney: '2000'
// , percentCompleted: 0.8}]

class Drives extends Component {

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

    fetch('http://0.0.0.0:5000/get_drives', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        this.setState({
          drives: data.drives,
          isLoading: false,
          dataSource: data.drives,
        },
        function() {
          this.arrayholder = data.drives;
        }
      )
        //console.log("data", this.state.drives);
      } else {
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });
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
      const itemData = item.driveTitle ? item.driveTitle.toUpperCase() : ''.toUpperCase();
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


  render() {
    return(
      <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        value={this.state.search}
        autoCorrect={false}
        platform="ios"
      />
      <FlatList
            columnWrapperStyle={styles.row}
            data={this.state.dataSource}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item} navigation={this.props.navigation}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
      />
      </View>
    );
  }
};


export default Drives;

const styles= EStyleSheet.create({
  row: {
  flex: 1,
  justifyContent: 'space-between'
  }
});
