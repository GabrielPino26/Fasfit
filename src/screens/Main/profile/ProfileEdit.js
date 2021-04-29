import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import { Container, Content, Label, StyleProvider, Text, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import { LOGIN_USER, UPDATE_FIELD_AUTH } from '../../../constants/actionTypes';
import { styles } from './ProfileEditStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { FlatGrid } from 'react-native-super-grid';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GalleryImage } from '../faslance/GalleryImage'
import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  editProfile
} from '../../../actions/profile'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  editProfile: params => dispatch(editProfile(params)),
});

const logoImage = require('../../../../assets/image/login_logo.png')
const closeButtonImage = require('../../../../assets/image/login_close.png')
const bottomImage = require('../../../../assets/image/bottom_bg.png')
const downArrowImage = require('../../../../assets/image/down_arrow_icon.png')
const profile_photo = require('../../../../assets/image/profile_avatar.png'); 

class ProfileEdit extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        email: '',
        proffesion: '',
        location: '',
        price: '',
        summery: '',
        link: '',
        profile_grid_data: [
	new GalleryImage('000', require('../../../../assets/image/add_picture_icon.png'))
        ],
        gallery_grid_data: [
	new GalleryImage('000', require('../../../../assets/image/add_picture_icon.png'))
        ],
        profile_photo_url : '',
        profile_photo_data : '',
        gallery_image_data: [],
        userInfo : null,
      }   
    }
  
    async componentDidMount() {
      let userInfo  = await storage.getUserInfo();
      // if(userInfo['picture'] !== undefined) {
      //   this.setState({profile_photo_data: userInfo['picture']})
      // }
      this.setState({userInfo: userInfo, username: userInfo['username'], email: userInfo['email'], profile_photo_data: userInfo['picture'] !== undefined ? userInfo['picture'] : ''})
    }
    
    handleLogin = () => {
      // console.log("clicked Login Button");
      this.props.navigation.navigate('Home')
    }

    handleClose = () => {
        this.props.navigation.goBack();
    }

    handlePhotoEdit = () => {
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
            this.setState({profile_photo_data: response.base64})
              // let profile_grid_data = this.state.profile_grid_data
              // var gallery_item = new GalleryImage(profile_grid_data.length + 1, response.base64)
              // profile_grid_data.push(gallery_item)
              // this.setState({profile_grid_data: profile_grid_data})
          }
      });

    }

    handleSignup = async () => {
      let userInfo  = await storage.getUserInfo();
      let userId = userInfo['_id']
      let params = {
        user_id: userId,
        username: this.state.username,
        email: this.state.email,
        picture: this.state.profile_photo_data,
      }
      console.log("params: ", params);
      const { editProfile } = this.props
      editProfile(params).then(async response => {
        if(response) {
          console.log("response_post: ", response)
          await storage.setUserInfo(response['result'])

          Alert.alert("Success", "Edit profile has been successed.")
        }else{
          Alert.alert("Error", "Create Account is failed.")
        }
      }).catch(err => {
        Alert.alert("Error", err)
      })
    }

    changeUsername = (value) => {    
      this.setState({username: value});
    }

    changeEmail = (value) => {    
      this.setState({email: value});
    }

    changeProffesion = (value) => {
      this.setState({proffesion: value});
    }
  
    changeLocation = (value) => {
      this.setState({location: value});
    }

    changeSummury = (value) => {
      this.setState({summery: value});
    }

    changeLink = (value) => {
      this.setState({link: value});
    }

    handleProfileGridItem = (gridItem) => {
    }

    handleProfileAdd = () => {
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
              let profile_grid_data = this.state.profile_grid_data
              var gallery_item = new GalleryImage(profile_grid_data.length + 1, response.base64)
              profile_grid_data.push(gallery_item)
              this.setState({profile_grid_data: profile_grid_data})
          }
      });
    }
    handleGalleryGridItem = (gridItem) => {
    }

    handleGalleryAdd = () => {
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
              let gallery_grid_data = this.state.gallery_grid_data
		var gallery_item = new GalleryImage(gallery_grid_data.length + 1, response.base64)
		gallery_grid_data.push(gallery_item)
		this.setState({gallery_grid_data: gallery_grid_data})
          }
      });
    }

    _renderProfileGridItem = (gridItem) => {
      return (
        <View>
          <TouchableOpacity style={styles.profile_grid_item_button} onPress={() => gridItem.id === '000' ? this.handleProfileAdd() : this.handleProfileGridItem(gridItem)}>
		{gridItem.id === '000' ?
	            <Image style={styles.profile_grid_item_image} source= {gridItem.img}/>
			:
	            <Image style={styles.profile_grid_item_image} source= {{uri: `data:image/jpeg;base64,${gridItem.img}`}}/>
		}
          </TouchableOpacity>
        </View>
      )
    }

    _renderGalleryGridItem = (gridItem) => {
      return (
        <View>
          <TouchableOpacity style={styles.profile_grid_item_button} onPress={() => gridItem.id === '000' ? this.handleGalleryAdd() : this.handleGalleryGridItem(gridItem)}>
		{gridItem.id === '000' ?
	            <Image style={styles.profile_grid_item_image} source= {gridItem.img}/>
			:
	            <Image style={styles.profile_grid_item_image} source= {{uri: `data:image/jpeg;base64,${gridItem.img}`}}/>

		}
          </TouchableOpacity>
        </View>
      )
    }

    render() {
      return(
        <StyleProvider style={getTheme(theme)}>
          <Container>
            <Content style={styles.loginContent}>
                <View style={styles.loginHeaderContent}>
                    <Image style={styles.loginLogoImage} source={logoImage}></Image>
                    <Label style={styles.loginTitleLabel}>FasFit</Label>
                    <TouchableOpacity style={styles.loginCloseButton} onPress={() => this.handleClose()}>
                        <Image style={styles.loginCloseImage} source={closeButtonImage}/>
                    </TouchableOpacity>
                </View>
              <KeyboardAwareScrollView 
                style={styles.loginKeyboardAvoiding}>
                <View>
                    <Label style={styles.loginHeaderTitleLabel}>Edit my account</Label>
                    <TouchableOpacity style={styles.profileButton} onPress={() => this.handlePhotoEdit()}>
                      <Image style={styles.profilePhotoImage} source={this.state.profile_photo_data == '' ? profile_photo : {uri: `data:image/jpeg;base64,${this.state.profile_photo_data}`}}/>
                    </TouchableOpacity>
                    <Label style={styles.loginSubTitleLabel}>Username</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your username' value={this.state.username} onChangeText={(text) => this.changeUsername(text)} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Email</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your email address' value={this.state.email} onChangeText={(text) => this.changeEmail(text)} />
                    </Item>                 
                    <TouchableOpacity style={styles.signupButton} onPress={() => this.handleSignup()}>
                      <Text style={styles.signupButtonTitle}>Save</Text>
                    </TouchableOpacity>
                    <Image style={styles.bottomImage} source={bottomImage}></Image>
                </View>                                                
              </KeyboardAwareScrollView>
            </Content>
          </Container>
        </StyleProvider>
      )
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);