import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchBar, Button} from 'react-native-elements';
import { connect } from 'react-redux'
import {LoginButton} from '../components/Login_SignUp'

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
    console.log("user_id", this.props.navigation.getParam('user_id', 0));

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/recommended_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: this.props.navigation.getParam('user_id', 0),
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        //console.log("response", data)
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
          alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });
  };

  onPressDone(user_id, navigate){
      navigate('UserDashboard', {navigate:navigate, user_id: user_id, sourcePage: 'Recommended'})
  }

  render() {
    const {navigate} = this.props.navigation;
    const firstName = this.props.navigation.getParam('firstName', 'User');
    const user_id = this.props.navigation.getParam('user_id', 0);

    return(
      <View style={{flex: 1,
          alignItems: 'center',
          backgroundColor: '$background'}}>
      <Text style={styles.introText}>Here are some recommended drives for you based on your selected causes.</Text>
      <FlatList
            columnWrapperStyle={styles.row}
            data={this.state.dataSource}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item} navigation={this.props.navigation} user_id={user_id}
              sourcePage='Drives'/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListFooterComponent={<View style={{alignItems: 'center'}}><LoginButton text='Done' onPress={() => this.onPressDone(user_id, navigate)}/><View style={{height: 30,}}></View></View>}
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
  },
  introText: {
    width: 290,
    fontSize: 18,
    paddingTop: 25,
    paddingBottom: 15,
    //paddingLeft: 80,
    //fontWeight: '300',
    color: '$inputText',
    textAlign: 'justify',
    fontFamily: '$textFont',
  },
  buttonContainer: {
    //paddingTop: 10,
    // alignContent: 'center',
    // justifyContent: 'center',
    // //paddingLeft: 20,
    //width: '90%'
  },
  buttonText: {
    //width: '60%',
    // alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: '$buttonBackground',
  },
});
