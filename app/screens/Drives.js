import React, {Component} from 'react';
import {Text, FlatList, View, TouchableOpacity, Dimensions, Animated} from 'react-native';
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
    animation: new Animated.Value(0),

  };
  this.arrayholder = [];
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

    fetch('http://0.0.0.0:5000/get_drives', {
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

  func = (user_selected, drive_id) => {
    //console.log("inside func")
    this.props.funcDrivesMain(true);
    var already_selected = this.drives_selected[drive_id];
    if (((already_selected === undefined) && !user_selected) || already_selected === false) {
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
              drive= {item} navigation={this.props.navigation} user_id={this.props.user_id} func={this.func}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
      />
      <Animated.View style={[styles.cover, backdrop]}>
        <View style={[styles.sheet]}>
          <Animated.View style={[styles.popup, slideUp]}>
            <TouchableOpacity>
              <Text style={{color: '#f0f0f0', fontFamily: 'Avenir',}}>The drive has been added to your Supported Drives.</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
      </View>
    );
  }
};


export default Drives;

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
    minHeight: 80,
  },
});
