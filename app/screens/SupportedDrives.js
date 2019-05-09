import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
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


// componentWillReceiveProps(nextProps){
//   console.log("Drives added", this.props.drives_added_by_user);
//   if(nextProps.drives_added!==this.props.drives_added){
//     //Perform some operation
//     this.setState({someState: someValue });
//     this.classMethod();
//   }
// }

  shouldComponentUpdate(){
    // console.log("previous props", prevProps.navigation.isFocused())
    // console.log("current props", this.props.navigation.isFocused())
    console.log("Drives added", this.props.drives_added_by_user);

    //console.log("Should component update", this.state.shouldUpdate);
    //console.log("state", this.state);
    if ((this.props.drives_added_by_user === true) || this.state.initial === true) {
      // this.setState({
      //   shouldUpdate: true,
      //   initial: false,
      // })
      this.props.drives_added_by_user = false;
      return true;
    }
    // if (this.state.shouldUpdate === true) {
    //   this.setState({
    //     shouldUpdate: true,
    //   })
    //   return true;
    // }
    // this.setState({
    //   shouldUpdate: false,
    // })
    return false;
  }

  componentWillUpdate() {
    console.log("componentDidUpdate")
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
        },
        // function() {
        //   this.arrayholder = data.drives;
        // }
      )
        //console.log("data", this.state.dataSource);
      } else {
        if (data.message == "Error:No Drives Found") {
          this.setState({
            drives: data.drives,
            isLoading: false,
            dataSource: data.drives,
            drives_added: false,
          },
          // function() {
          //   this.arrayholder = data.drives;
          // }
          )
        } else {
          alert(data.message); //TODO: Network error component
        }
      }
    })
    .catch((error) => {
      alert(error)
    });
    this.setState({
      shouldUpdate: false,
    })
    this.props.funcDrivesMainDisable(true);
  }

  // onRefresh() {
  //    this.setState({ isFetching: true }, function() { this.getApiData() });
  // }

  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    // const url = `https://api.stackexchange.com/2.2/users?page=1&order=desc&sort=reputation&site=stackoverflow`;
    // axios.get(url)
    //   .then(res => {
    //     let data = res.data.items
    //     this.setState({ isRefreshing: false, data: data }) // false isRefreshing flag for disable pull to refresh indicator, and clear all data and store only first page data
    //   })
    //   .catch(error => {
    //     this.setState({ isRefreshing: false, error: 'Something just went wrong' }) // false isRefreshing flag for disable pull to refresh
    //   });

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
