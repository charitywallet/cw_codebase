import Icon from 'react-native-animated-icons';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class ReactNativeAnimatedIcons extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      triggerAnimationId:null,
      // triggerAnimationId:1,
      hearts:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}],
      tweets:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}]
    };

  }

    onPressHearts = (item) => {
      // console.log(" onPress:item ",item);
      if(!item)return
      // item.isActive!=item.isActive
    let {hearts} = this.state
      let updatedlist=hearts.map(o => o.id === item.id
                            ?{ ...o, isActive: o.isActive?false:true}
                          :o)
      this.setState({
        triggerAnimationId:hearts.find(x => x.id === item.id).id,
        hearts: updatedlist})

    }





  render() {
    const {tweets,hearts} = this.state
    let red="rgba(245,60,60,0.8)"
    let light="rgba(255,255,255,0.5)"
  return (
    <View style={{alignItems: "center",justifyContent: "center",height:350,flexDirection:"column", }}>
      <Text style={{textAlignVertical: "center", textAlign: "center",fontSize:20 ,margin:10}}>
      Animate on Icon Name Change
      </Text>
      <View style={{height:70,alignItems: "center",justifyContent: "center",flexDirection:"row",}}>

            {hearts.map((o,i) => {

              return   (<TouchableOpacity style={{height:50,}} key={i} onPress={()=>this.onPressHearts(o)}>
                <Icon
                  item={o}
                  name={o.isActive?"heart":"heart-outline"}
                  // name={"heart"}
                  isActive={o.isActive}
                  colorOutputRange={[
                  light,
                  "pink",
                   o.isActive?red:light,
                ]}
                // animateAllActive
                colorInputRange={[0, 0.56, 1]}
              />
             </TouchableOpacity>)

            })}
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01a699',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
