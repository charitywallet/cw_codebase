import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchBar} from 'react-native-elements';

class SupportedDrives extends Component {

constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    search: '',
    user_id: this.props.user_id,
    drives_added: true,
    isRefreshing: false,
    loading: false,
    shouldUpdate: this.props.drives_added_by_user,
    initial: true,
  };
  this.arrayholder = [];
}

componentWillMount() {
  console.log("componentDidMount")
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/get_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.user_id,
      my_drives: 1,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        this.setState({
          drives: data.drives,
          isLoading: false,
          dataSource: data.drives,
          drives_added: true,
          loading: false,
          initial: false,
        },
        function() {
          this.arrayholder = data.drives;
        }
      )
        //console.log("data", this.state.dataSource);
      } else {
        if (data.message == "Error:No Drives Found") {
          this.setState({
            drives: data.drives,
            isLoading: false,
            dataSource: data.drives,
            drives_added: false,
            loading: false,
            initial: false,
          },
          function() {
            this.arrayholder = data.drives;
          }
          )
        } else {
          alert(data.message); //TODO: Network error component
        }
      }
    })
    .catch((error) => {
      alert(error)
    });
  };


  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator

      function processResponse(response) {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]).then(res => ({
          statusCode: res[0],
          data: res[1]
        }));
      }

      fetch('http://0.0.0.0:5000/get_drives', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
        my_drives: 1,
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          this.setState({
            drives: data.drives,
            isLoading: false,
            dataSource: data.drives,
            drives_added: true,
            isRefreshing: false
          },
          function() {
            this.arrayholder = data.drives;
          }
        )
          //console.log("data", this.state.dataSource);
        } else {
          if (data.message == "Error:No Drives Found") {
            this.setState({
              drives: data.drives,
              isLoading: false,
              dataSource: data.drives,
              drives_added: false,
              isRefreshing: false,
            },
            function() {
              this.arrayholder = data.drives;
            }
            )
          } else {
            this.setState({
              drives: data.drives,
              isLoading: false,
              dataSource: data.drives,
              drives_added: false,
              isRefreshing: false,
            })
            alert(data.message); //TODO: Network error component
          }
        }
      })
      .catch((error) => {
        alert(error)
      });

  }

  search = text => {
    //console.log(text);
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
      {!this.state.drives_added ? <Text style={{}}> Please select drives to view your drives. </Text> : null}
      <FlatList
            columnWrapperStyle={styles.row}
            data={this.state.dataSource}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isRefreshing}
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


export default SupportedDrives;

const styles= EStyleSheet.create({
  row: {
  flex: 1,
  justifyContent: 'space-between'
  }
});
