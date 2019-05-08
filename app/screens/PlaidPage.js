import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import PlaidAuthenticator from 'react-native-plaid-link'
import { Button } from 'react-native-elements';


class PlaidPage extends Component {
  constructor() {
     super();
     this.state = { isVisible: true }
   };

  onMessage = (data) => {
    //console.log("data", data);
    this.setState({data})
  }

  handleFinishButton = (navigation) => {
    //console.log(this.state.data)
    function processResponse(response) {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
      }));
    }

    fetch('http://0.0.0.0:5000/set_ptoken', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //user_id: this.state.user_id,
      user_id: this.props.user_id,
      public_token: this.state.data.metadata.public_token,
    }),
  }).then(processResponse)
    .then(response => {
      const { statusCode, data } = response;
      if (statusCode == 200) {
        // this.setState({
        //   success: true,
        // })
        //console.log("public_token", this.state.data.metadata.public_token);
        //console.log("user id", this.props.user_id);
      } else {
        // this.setState({
        //   success: false,
        // })
        alert(data.message); //TODO: Network error component
      }
    })
    .catch((error) => {
      alert(error)
    });

    navigation.navigate('UserSignup2', {plaid_data: this.state.data, error: false})
  }

  handleGoBack = (navigation) => {
    console.log("Back button", this.state)
    navigation.navigate('UserSignup2', {plaid_data: null, error: true})
  }

  componentWillUnmount() {
    if (this.state.data && this.state.data.metadata && this.state.data.metadata.public_token) {

      function processResponse(response) {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]).then(res => ({
          statusCode: res[0],
          data: res[1]
        }));
      }

      fetch('http://0.0.0.0:5000/set_ptoken', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //user_id: this.state.user_id,
        user_id: this.props.user_id,
        public_token: this.state.data.metadata.public_token,
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          // this.setState({
          //   success: true,
          // })
          //console.log("public_token", this.state.data.metadata.public_token);
          //console.log("user id", this.props.user_id);
        } else {
          // this.setState({
          //   success: false,
          // })
          alert(data.message); //TODO: Network error component
        }
      })
      .catch((error) => {
        alert(error)
      });


      this.props.navigation.state.params.returnData(this.state.data, true, false, this.state.data.metadata.institution.name);
      //console.log("Inst name1", this.state.data.metadata.institution.name)
      this.props.navigation.goBack();
    } else {
      this.props.navigation.state.params.returnData(null, false, true, null);
      this.props.navigation.goBack();
    }
  }

  render() {

    return(

       <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="0cfea3b8cf3611b374aecb1a215a39"
        env="sandbox"
        product="transactions"
        clientName="CharityWallet"
        selectAccount={false}
      />


    );
  }
}

export default PlaidPage;
// <View style={{flex:1,}}>
//   </View>
// {this.state.data && this.state.data.metadata &&
//   this.state.data.metadata.public_token ?
//   <View style={{justifyContent:'center', marginBottom: 300, alignItems:'center'}}>
//      <Text style={{paddingBottom: 50,}}>{this.state.data.metadata.institution.name} account added! Please go back to the Sign up screen.</Text>
//      <Button containerStyle={{}} title="Finish" titleStlye={{color:'white'}} onPress={() => this.handleFinishButton(this.props.navigation)}/>
//   </View>: null }
