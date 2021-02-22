import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Text, Body, Button, Content, Input, Row } from 'native-base';

export default class CustomButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Content style={[this.props.style, {paddingHorizontal: 20, width: '100%'}]}>
        <Button 
          large
          style={[styles.button, {backgroundColor: this.props.backgroundColor?this.props.backgroundColor: 'transparent'}]}
          onPress={this.props.onPress}
        >
          <Text style={{color:this.props.textColor?this.props.textColor: 'white', fontSize: 16}}>{this.props.text}</Text>
        </Button>
      </Content>
    );
  }
}

const styles  =StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
  }
})