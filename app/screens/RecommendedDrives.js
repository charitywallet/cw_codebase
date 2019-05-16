import React, {Component} from 'react';
import {FlatList, View, Text, Animated, Dimensions, TouchableOpacity} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Overlay, Button, Input } from 'react-native-elements';
import { connect } from 'react-redux'
import {LoginButton} from '../components/Login_SignUp'

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

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
    dataSource: [],
    isVisibleFirst: false,
  };
  this.arrayholder = this.props.allDrivesInfo;
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
    console.log("Rec done")
      navigate('UserDashboard', {navigate:navigate, user_id: user_id, sourcePage: 'Recommended'})
  }

  funcFirstDrive = (first) => {
    if (first) {
      this.setState({
        isVisibleFirst: true
      })
    }
    else {
      this.setState({
        isVisibleFirst: false
      })
    }
  }

  onDonePress = () => {
    this.setState({
      isVisibleFirst: false
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    const firstName = this.props.navigation.getParam('firstName', 'User');
    const user_id = this.props.navigation.getParam('user_id', 0);
    console.log("rec user id", user_id)



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
              sourcePage='Drives' funcFirstDrive={this.funcFirstDrive}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListFooterComponent={<View style={{alignItems: 'center'}}><LoginButton text='Done' onPress={() => this.onPressDone(user_id, navigate)}/><View style={{height: 30,}}></View></View>}
      />
      <Overlay isVisible={this.state.isVisibleFirst} onBackdropPress={this.onDonePress}
      overlayStyle={styles.overlay} windowBackgroundColor="rgba(0, 0, 0, .7)">
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Yay, you started supporting your first drive. {"\n"} {"\n"}
          Selecting a drive does not mean you have donated to it.
          Your change would be donated only when it reaches $5 and at the end of the month to the drives you have selected!</Text>
          <View style={styles.buttonGroup}>
            <Button title="Ok" onPress = {this.onDonePress} containerStyle = {styles.buttonContainer1}
            titleStyle={styles.buttonText} buttonStyle={styles.button}/>
          </View>
        </View>
      </Overlay>
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
  },
  buttonText: {
    backgroundColor: '$buttonBackground',
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "$primaryBlue",
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 70,
  },
  overlay: {
    height: imageHeight/3,
    alignItems: 'center',
  },
  overlayContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  overlayText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    fontFamily: '$textFont',
    fontSize: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  buttonContainer1: {
    width: imageWidth/3.5,
    height: 40,
    marginLeft:5,
    marginBottom: 20,
  },
  buttonContainer2: {
    width: imageWidth/3.5,
    height: 40,
    paddingLeft: 10,
  },
  buttonText : {
    color: 'white',
    fontFamily: '$textFont',
  },
  button: {
    backgroundColor: '$buttonBackground',
  }
});
