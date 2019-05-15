import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import PlaidAuthenticator from 'react-native-plaid-link'
import { Button } from 'react-native-elements';
import {LoginButton} from '../components/Login_SignUp'

class PlaidPage extends Component {
  constructor() {
     super();
     this.state = { isVisible: true, errorMessageVisible: false, success: false, }
   };

  onMessage = (data) => {
    this.setState({data})
  }

componentWillUpdate(){
  //console.log("will update", this.state)
  if (this.state.data && this.state.data.eventName && this.state.data.eventName === 'EXIT'){
    this.setState({
      errorMessageVisible: true,
    })

  }
}
  // handleFinishButton = (navigation) => {
  //   //console.log(this.state.data)
  //   function processResponse(response) {
  //     const statusCode = response.status;
  //     const data = response.json();
  //     return Promise.all([statusCode, data]).then(res => ({
  //       statusCode: res[0],
  //       data: res[1]
  //     }));
  //   }
  //
  //   fetch('http://charitywallet.us-west-1.elasticbeanstalk.com/set_ptoken', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     //user_id: this.state.user_id,
  //     user_id: this.props.navigation.state.params.user_id,
  //     public_token: this.state.data.metadata.public_token,
  //   }),
  // }).then(processResponse)
  //   .then(response => {
  //     const { statusCode, data } = response;
  //     if (statusCode == 200) {
  //       // this.setState({
  //       //   success: true,
  //       // })
  //       console.log("public_token", this.state.data.metadata.public_token);
  //       //console.log("user id", this.props.user_id);
  //     } else {
  //       // this.setState({
  //       //   success: false,
  //       // })
  //       //alert(data.message); //TODO: Network error component
  //     }
  //   })
  //   .catch((error) => {
  //     alert(error)
  //   });
  //
  //   navigation.navigate('UserSignup2', {plaid_data: this.state.data, error: false,textVisible: true})
  // }

  handleErrorButton = (navigation) => {
    //console.log("Back button", this.state)
    navigation.navigate('UserSignup2', {plaid_data: null, error: true, textVisible: false})
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
        user_id: this.props.navigation.state.params.user_id,
        public_token: this.state.data.metadata.public_token,
      }),
    }).then(processResponse)
      .then(response => {
        const { statusCode, data } = response;
        if (statusCode == 200) {
          this.setState({
            success: true,
          })
          //console.log("public_token", this.state.data.metadata.public_token);
          //console.log("user id", this.props.user_id);
        } else {
          this.setState({
            success: false,
          })
          alert(data.message); //TODO: Network error component
        }
      })
      .catch((error) => {
        alert(error)
      });
      console.log("public_token", this.state.data.metadata.public_token);
      this.props.navigation.state.params.returnData(this.state.data, true, false, this.state.data.metadata.institution.name,
      this.props.navigation.state.params.idx);
      this.props.navigation.goBack();
    } else {
      this.props.navigation.state.params.returnData(null, false, true, null, this.props.navigation.state.params.idx);
      this.props.navigation.goBack();
    }
  }

  render() {

    return(
      <View style={{flex:1,}}>
       <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="0cfea3b8cf3611b374aecb1a215a39"
        env="sandbox"
        product="transactions"
        clientName="CharityWallet"
        selectAccount={false}
      />
      {this.state.data && this.state.data.metadata &&
        this.state.data.metadata.public_token ?
        <View style={styles.container}>
           <Text style={styles.messageText}>{this.state.data.metadata.institution.name} account added successfully. Please go back to continue with the Sign Up. {this.state.data.metadata.public_token}</Text>
           {/*<LoginButton text="Done" onPress={() => this.handleFinishButton(this.props.navigation)}/>*/}
        </View>: null }
        {(this.state.errorMessageVisible) ?
          <View style={styles.container}>
             <Text style={styles.messageText}>Failed to add your account. Please go back and try again.</Text>
             {/*<LoginButton text="Go Back" onPress={() => this.handleErrorButton(this.props.navigation)}/>*/}
          </View>: null }
      </View>


    );
  }
}

const styles = EStyleSheet.create({
  messageText: {
    padding: 30,
    fontFamily: '$textFont',
    fontSize: 18,
    color: '$inputText',
  },
  container: {
    justifyContent:'center',
    marginBottom: 300,
    alignItems:'center'
  },
});

export default PlaidPage;
