import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import { Container, Content, Label, StyleProvider, Text, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import { LOGIN_USER, UPDATE_FIELD_AUTH } from '../../../constants/actionTypes';
import { connect } from 'react-redux';
import { styles } from './SignupDetailStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Spinner from 'react-native-loading-spinner-overlay';
import { storage } from '../../../helper/storage'

import {
  signUp
} from '../../../actions/authentication'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  signUp: params => dispatch(signUp(params)),
});

const logoImage  = require('../../../../assets/image/login_logo.png')
const closeButtonImage = require('../../../../assets/image/login_close.png')
const forgetEyeImage = require('../../../../assets/image/icon_eye.png')
const bottomImage = require('../../../../assets/image/bottom_bg.png')

class SignupDetail extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      }   
    }
  
    componentDidUpdate() {
        // if (nextProps.token) {
        //     this.props.navigation.navigate('Main');
        // }
    }
    handleSignup = async () => {
      // console.log("clicked Login Button");
      // this.props.onSubmit(this.state.email, this.state.password);
      if(this.state.confirm_password  !== this.state.password) {
        Alert.alert("Error", "The password is not same. Please signup again.")
      }
      const { signUp } = this.props
      let usertype = await storage.getUserType()
      let params = {
        _csrf: '',
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirm_password,
        usertype: usertype
      };
      console.log("params: ", params);
      this.setState({spinner: true});
      signUp(params).then(async response => {
        this.setState({spinner: false});
        if (response) {
          if(response['result'] == true) {
            await storage.setUserInfo(response['data'])
            this.props.navigation.navigate('ScopeDetail');
          }else{
            Alert.alert("Error", "SignUp is failed. Please signup again.")
          }
        }else{
          Alert.alert("Error", "SignUp is failed. Please signup again.")
        }
      }).catch(err => {
        Alert.alert("Error", err)
      })
    }

    handleClose = () => {
        this.props.navigation.goBack();
    }

    handleForgetPasswordEye = () => {

    }

    handleConfirmForgetPasswordEye = () => {

    }

    changeUsername = (value) => {    
      this.setState({username: value});
      // this.props.onChangeEmail(value);
    }

    changeEmail = (value) => {    
      this.setState({email: value});
      // this.props.onChangeEmail(value);
    }

    changePassword = (value) => {
      this.setState({password: value});
      // this.props.onChangePassword(value);
    }

    changeConfirmPassword = (value) => {
      this.setState({confirm_password: value});
      // this.props.onChangePassword(value);
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
                    <Label style={styles.loginHeaderTitleLabel}>Create my Fasfit account</Label>
                    <Label style={styles.loginSubTitleLabel}>Username</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your username' onChangeText={this.changeUsername} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Email</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your email address' onChangeText={this.changeEmail} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel}>Password</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your password' secureTextEntry={true} onChangeText={this.changePassword} />
                    </Item>                 
                    <TouchableOpacity style={styles.pwdEyeButton} onPress={this.handleForgetPasswordEye}>
                        <Image style={styles.pwdEyeImage} source={forgetEyeImage}/>
                    </TouchableOpacity>
                    <Label style={styles.loginSubTitleLabel}>Confirm Password</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your password' secureTextEntry={true} onChangeText={this.changeConfirmPassword} />
                    </Item>                 
                    <TouchableOpacity style={styles.confirmpwdEyeButton} onPress={this.handleConfirmForgetPasswordEye}>
                        <Image style={styles.confirmpwdEyeImage} source={forgetEyeImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={this.handleSignup}>
                      <Text style={styles.loginButtonTitle}>Signup</Text>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignupDetail);