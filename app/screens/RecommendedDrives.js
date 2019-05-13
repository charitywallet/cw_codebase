import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchBar} from 'react-native-elements';
import { connect } from 'react-redux'

class RecommendedDrives extends Component {

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
    dataSource: []
  };
}

componentWillMount() {
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/recommended_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.user_id,
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

  render() {
    return(
      <View>
      <FlatList
            columnWrapperStyle={styles.row}
            data={this.state.dataSource}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item} navigation={this.props.navigation} user_id={this.props.user_id}
              sourcePage='Supported'/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
      />
      </View>
    );
  }
};

function mapStateToProps(state) {
    return {
        favoriteDrivesInfo: state.favoriteDrivesInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFav: (drive) => dispatch({ type: 'ADD_TO_FAV', drive:drive}),
        removeFromFav: (drive) => dispatch({ type: 'REMOVE_FROM_FAV', drive:drive}),
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(RecommendedDrives)

export default RecommendedDrives;

const styles= EStyleSheet.create({
  row: {
  flex: 1,
  justifyContent: 'space-between'
  }
});
