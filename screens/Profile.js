import React,{Component} from 'react';
import {View , StyleSheet , Text} from 'react-native';

export default class Profile extends Component{
  render(){
    return(
      <View 
      style={{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"}}>
      <Text> This is Profile Screen</Text>
      </View>
    )
  }
}