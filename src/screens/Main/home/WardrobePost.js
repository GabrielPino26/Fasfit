import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Item, StyleProvider, Label, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './WardrobePostStyle';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  addWardrobePostItem
} from '../../../actions/wardrobe'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TextInput } from 'react-native-gesture-handler';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  addWardrobePostItem: params => dispatch(addWardrobePostItem(params))
});

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const camera_icon = require('../../../../assets/image/camera_icon.png');
class WardrobePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post_title: '',
      post_description: '',
      gallery_photo_url : null,
      profile_photo_data : ''
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const itemImage = navigation.getParam('itemImage', ''); 
    this.setState({gallery_photo_url: itemImage}); 
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
      title: this.state.post_title,
      description: this.state.post_description,
      image: this.state.profile_photo_data,
      image_id: 'post_image',
      total_comments: 0,
      total_likes: 0
    }
    console.log("params: ", params);
    const { addWardrobePostItem } = this.props
    addWardrobePostItem(params).then(async response => {
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

  handleCamera = () => {
    var options = {
      maxWidth: 200,
      maxHeight: 200,
      mediaType: 'photo',
      includeBase64: true,
    };
    launchCamera(options, (response) => {
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
              gallery_photo_url: response.uri,
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
            <Label style={styles.navTitleLabel}>Folder Post</Label>
              <TouchableOpacity style={styles.notificationBackButton} onPress={() => this.handleBack()}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView style={styles.keyboard_view}>
                <TouchableOpacity style={styles.profile_photo_button} onPress={() => this.handleCamera()}>
                  <View style={styles.profile_photo_view}>
                    <Image style={styles.profile_photo_img} source={this.state.gallery_photo_url == null ? null : {uri:this.state.gallery_photo_url}} />
                    <Image style={styles.cameraButtonImage} source={camera_icon} />
                  </View>
                </TouchableOpacity>
                <Label style={styles.upload_title_label}>Upload Cover Photo</Label>
                <Label style={styles.title_label}>Create Folder Name</Label>
                <Item floatingLabel style={styles.underlinestyle}>
                  <Input placeholder="Please enter folder name" onChangeText={(text) => this.changeTitle(text)} value={this.state.post_title}/>
                </Item>
                <TouchableOpacity style={styles.next_button} onPress={() => this.handleCreate()}>
                  <Label style={styles.next_button_label}>Save</Label>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WardrobePost);