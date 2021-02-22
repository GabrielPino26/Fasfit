import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Input, Row } from 'native-base';

export default class CustomInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Row style={{paddingLeft: 18, alignItems: 'center', paddingVertical: 10}}>
        <Input
          style={styles.input}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          placeholderTextColor='grey'
        />
      </Row>
    );
  }
}

const styles  =StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'rgba(245,245,245,0.8)',
    color: '#263238'
  }
})