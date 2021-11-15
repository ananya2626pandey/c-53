import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component{
  render() {
  return (
  <Button color="red" title="click me"/>
  );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:400,marginLeft:0}}>
      <Text>My first App</Text>
      <RedButton/>
      </View>
        
    );
  }
}