import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import { Container, Content, Label, StyleProvider, Text, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import { LOGIN_USER, UPDATE_FIELD_AUTH } from '../../../constants/actionTypes';
import { styles } from './FaslanceCreateStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { FlatGrid } from 'react-native-super-grid';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GalleryImage } from './GalleryImage'
import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  addFaslanceAccount
} from '../../../actions/faslance'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  addFaslanceAccount: params => dispatch(addFaslanceAccount(params)),
});

const logoImage = require('../../../../assets/image/login_logo.png')
const closeButtonImage = require('../../../../assets/image/login_close.png')
const bottomImage = require('../../../../assets/image/bottom_bg.png')
const downArrowImage = require('../../../../assets/image/down_arrow_icon.png')

class FaslanceCreate extends Component {
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
        gallery_image_data: []
      }   
    }
  
    componentDidUpdate() {
        // if (nextProps.token) {
        //     this.props.navigation.navigate('Main');
        // }
    }
    handleLogin = () => {
      // console.log("clicked Login Button");
      this.props.navigation.navigate('Home')
    }

    handleClose = () => {
        this.props.navigation.goBack();
    }

    handleSignup = async () => {
      let userInfo  = await storage.getUserInfo();
      let userId = userInfo['_id']
      let params = {
        user_id: userId,
        username: this.state.username,
        email: this.state.email,
        profession: this.state.proffesion,
        location: this.state.location,
        prices: this.state.price,
        summary: this.state.summery,
        links: this.state.link,
        profile_image: this.state.profile_photo_data,
        gallarys: this.state.gallery_image_data,
      }
      console.log("params: ", params);
      const { addFaslanceAccount } = this.props
      addFaslanceAccount(params).then(async response => {
        if(response) {
          console.log("response_post: ", response)
          this.props.navigation.goBack();
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
                    <TouchableOpacity style={styles.loginCloseButton} onPress={this.handleClose}>
                        <Image style={styles.loginCloseImage} source={closeButtonImage}/>
                    </TouchableOpacity>
                </View>
              <KeyboardAwareScrollView 
                style={styles.loginKeyboardAvoiding}>
                <View>
                    <Label style={styles.loginHeaderTitleLabel}>Create my Faslance account</Label>
                    <Label style={styles.loginSubTitleLabel}>Username</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your username' onChangeText={this.changeUsername} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Email</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your email address' onChangeText={this.changeEmail} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Proffesion</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Model' onChangeText={this.changeProffesion} disabled={true} />
                    </Item>                 
                    <TouchableOpacity style={styles.proffesionButton} onPress={this.handleClose}>
                        <Image style={styles.proffesionImage} source={downArrowImage}/>
                    </TouchableOpacity>
                    <Label style={styles.loginSubTitleLabel}>Location</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Manhattan' onChangeText={this.changeLocation} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Prices</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='50$/hr' onChangeText={this.changeLocation} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Summury</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='About me' onChangeText={this.changeSummury} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Links</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='.com' onChangeText={this.changeLink} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Profile Picture</Label>
                    <FlatGrid 
                      itemDimension={80}
                      data={this.state.profile_grid_data}
                      spacing={10}
                      horizontal={true}
                      renderItem={({item}) => this._renderProfileGridItem(item)}
                    />
                    <Label style={styles.loginSubTitleLabel}>Add Gallery</Label>
                    <FlatGrid 
                      itemDimension={80}
                      data={this.state.gallery_grid_data}
                      spacing={10}
                      horizontal={false}
                      renderItem={({item}) => this._renderGalleryGridItem(item)}
                    />
                    <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
                      <Text style={styles.signupButtonTitle}>Sign Up</Text>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FaslanceCreate);