import React, {Component} from 'react';
import {Text, FlatList, View, TouchableOpacity, Dimensions, Animated, Modal} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchBar} from 'react-native-elements';
import { connect } from 'react-redux'

class Drives extends Component {

constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    search: '',
    user_id: this.props.user_id,
    animation: new Animated.Value(0),
    localFavDrives: this.props.favoriteDrivesInfo,
    currentlyDisplayed: this.props.favoriteDrivesInfo,

  };
  this.arrayholder = this.props.allDrivesInfo;
  this.drives_selected = {};
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

    fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/get_drives', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //user_id: 1,
      my_drives: 0,
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

// shouldComponentUpdate(nextProps, nextState){
//   if (nextProps.favoriteDrivesInfo !== this.props.favoriteDrivesInfo){
//     //console.log("should update")
//     return true
//   }
//   return false
// }

  func = (user_selected, drive_id) => {
    // console.log("user_selected", user_selected)
    // console.log("drive_id", drive_id)
    //this.props.funcDrivesMain(true);
    var already_selected = this.drives_selected[drive_id];
    // console.log("already_selected", already_selected)
    if (((already_selected === undefined) && user_selected) || already_selected === false) {
      this.drives_selected[drive_id] = true;
      Animated.sequence([
        	Animated.timing(this.state.animation, {
        		toValue: 1,
        		duration: 1000,
            useNativeDriver: true,
        	}),
          Animated.delay(3000),
          Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          })
        ]).start()
    } else {
      this.drives_selected[drive_id] = false;
    }
    //this.props.funcDrivesMainDisable();
  }

  search = text => {
    //console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    //console.log("arrayholder", this.arrayholder)
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.driveTitle ? item.driveTitle.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      currentlyDisplayed: newData,
      search: text,
    });
  }


  render() {
    const screenHeight = Dimensions.get("window").height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };
    return(
      <View>
    {/*}<SearchBar
        placeholder='Type here...'
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        value={this.state.search}
        autoCorrect={false}
        platform="ios"
      />*/}
      <FlatList
            columnWrapperStyle={styles.row}
            data={this.props.allDrivesInfo}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item} navigation={this.props.navigation} user_id={this.props.user_id}
              sourcePage='Drives' func={this.func}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
      />
      <Animated.View style={[styles.cover, backdrop]}>
        <View style={[styles.sheet]}>
          <Animated.View style={[styles.popup, slideUp]}>
            <TouchableOpacity>
              <Text style={{color: '#f0f0f0', fontFamily: 'Avenir', fontWeight: '600', padding: 5, textAlign: 'center'}}>
              The drive has been added to your Supported Drives.</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
      </View>
    );
  }
};

function mapStateToProps(state) {
    return {
        favoriteDrivesInfo: state.favoriteDrivesInfo,
        allDrivesInfo: state.allDrivesInfo,
        allDrivesToggle: state.allDrivesToggle
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFav: (drive) => dispatch({ type: 'ADD_TO_FAV', drive:drive}),
        removeFromFav: (drive) => dispatch({ type: 'REMOVE_FROM_FAV', drive:drive}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drives)

//export default Drives;

const styles= EStyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    //backgroundColor: "rgba(0,0,0,.5)",
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
});
