import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Item, StyleProvider, Label, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './FaslanceTipPostStyle';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  addFaslanceTips
} from '../../../actions/faslance'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TextInput } from 'react-native-gesture-handler';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  addFaslanceTips: params => dispatch(addFaslanceTips(params)),
});

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
class FaslanceTipPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post_description: '',
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  changeTitle = (value) => {
    this.setState({post_title: value})
  }

  changeDescription = (value) => {
    this.setState({post_description: value})
  }

  handleCreate = async () => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']

    let params = {
      user_id: userId,
      description: this.state.post_description,
    }
    console.log("params: ", params);
    const { addFaslanceTips } = this.props
    addFaslanceTips(params).then(async response => {
      if(response) {
        console.log("response_post: ", response)
        this.props.navigation.goBack();
      }else{
        Alert.alert("Error", "Get Post is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })

  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.notificationBackButton} onPress={this.handleBack}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Tip Post</Label>
            </View>
            <KeyboardAwareScrollView style={styles.keyboard_view}>
                <Label style={styles.des_label}>Description</Label>
                <TextInput style={styles.des_text} placeholder="Description" onChangeText={this.changeDescription} multiline/>
                <TouchableOpacity style={styles.next_button} onPress={this.handleCreate} value={this.state.post_description}>
                  <Label style={styles.next_button_label}>Save</Label>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FaslanceTipPost);