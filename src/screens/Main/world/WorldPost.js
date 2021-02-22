import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Item, StyleProvider, Label, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './WorldPostStyle';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  postWorldInfo
} from '../../../actions/world'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TextInput } from 'react-native-gesture-handler';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  postWorldInfo: params => dispatch(postWorldInfo(params)),
});

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
class WorldPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      world_name: '',
      world_title: '',
      world_content1: '',
      world_content2: '',
      world_color: '',
      profile_photo_url : '',
      profile_photo_data : ''
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  changeName = (value) => {
    this.setState({world_name: value})
  }

  changeTitle = (value) => {
    this.setState({post_title: value})
  }

  changeContent1 = (value) => {
    this.setState({world_content1: value})
  }

  changeContent2 = (value) => {
    this.setState({world_content2: value})
  }

  handleCreate = async () => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']

    let params = {
      user_id: userId,
      world_name: this.state.world_title,
      title: this.state.post_title,
      content1: this.state.world_content1,
      content2: this.state.world_content2,
      image: this.state.profile_photo_data,
      image_id: 'post_image',
    }
    console.log("params: ", params);
    const { postWorldInfo } = this.props
    postWorldInfo(params).then(async response => {
      if(response) {
        console.log("response_post: ", response)
        this.props.navigation.goBack();
      }else{
        Alert.alert("Error", "Add Post is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })

  }

  handleCamera = () => {
    var options = {
      maxWidth: 200,
      maxHeight: 200,
      mediaType: 'photo',
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
        } else {
            this.setState({
              profile_photo_url: response.uri,
              profile_photo_data: response.base64
            });
        }
    });
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
              <Label style={styles.navTitleLabel}>World Post</Label>
            </View>
            <KeyboardAwareScrollView style={styles.keyboard_view}>
                <TouchableOpacity style={styles.profile_photo_button} onPress={this.handleCamera}>
                  <View style={styles.profile_photo_view}>
                    <Image style={styles.profile_photo_img} source={this.state.profile_photo_url == '' ? null : {uri:this.state.profile_photo_url}} />
                  </View>
                </TouchableOpacity>
                <Label style={styles.name_label}>World Name</Label>
                <Item floatingLabel style={styles.underlinestyle}>
                  <TextInput placeholder="" onChangeText={this.changeName} value={this.state.world_name}/>
                </Item>
                <Label style={styles.title_label}>Title</Label>
                <Item floatingLabel style={styles.underlinestyle}>
                  <TextInput placeholder="" onChangeText={this.changeTitle} value={this.state.world_title}/>
                </Item>
                <Label style={styles.des_label}>Content1</Label>
                <TextInput style={styles.des_text} placeholder="Content1" onChangeText={this.changeContent1} multiline/>
                <Label style={styles.des_label}>Content2</Label>
                <TextInput style={styles.des_text} placeholder="Content2" onChangeText={this.changeContent2} multiline/>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorldPost);