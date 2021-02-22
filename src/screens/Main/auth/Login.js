import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Content, Label, StyleProvider, Text, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import { connect } from 'react-redux';
import { styles } from './LoginStyle';
import { storage } from '../../../helper/storage';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Spinner from 'react-native-loading-spinner-overlay';
import {
  logIn,
  forgotPassword
} from '../../../actions/authentication'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  logIn: params => dispatch(logIn(params)),
  forgotPassword: params => dispatch(forgotPassword(params)),
});

class Login extends Component {
    constructor() {
      super();
      this.state = {
        logoImage: require('../../../../assets/image/login_logo.png'),
        closeButtonImage: require('../../../../assets/image/login_close.png'),
        forgetEyeImage: require('../../../../assets/image/icon_eye.png'),
        email: '',
        password: '',
        spinner: false,
      }   
    }
  
    componentDidUpdate() {
        // if (nextProps.token) {
        //     this.props.navigation.navigate('Main');
        // }
    }
    handleLogin = async () => {
      const { logIn } = this.props
      let token = await storage.getDeviceToken()
      let params = {
        _csrf: '',
        deviceToken: token,
        email: this.state.email,
        password: this.state.password,
      };
      this.setState({spinner: true});
      logIn(params).then(async response => {
        this.setState({spinner: false});
        if (response) {
            if(response['result'] == true) {
              console.log("response: ", response['data']);
              await storage.setUserInfo(response['data'])
              this.props.navigation.navigate('Home')
            }else{
              Alert.alert("Error", "Authorization expired. Please login again.")
            }
        } else {
          Alert.alert("Error", "Authorization expired. Please login again.")
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

    handleForgetPassword = async () => {
      if(this.state.email == "" ) {
        Alert.alert("Error", "Please input email address")
        return
      }
      const { forgotPassword } = this.props
      let params = {
        email: this.state.email,
      };
      this.setState({spinner: true});
      forgotPassword(params).then(async response => {
        this.setState({spinner: false});
        if (response) {
            if(response['result'] == true) {
            }else{
              Alert.alert("Error", "Forget password is failed.")
            }
        } else {
          Alert.alert("Error", "Forget password is failed.")
        }
      }).catch(err => {
        Alert.alert("Error", err)
      })
    }

    handleSignup = () => {
      this.props.navigation.navigate('Signup');
    }

    changeEmail = (value) => {    
      this.setState({email: value});
      // this.props.onChangeEmail(value);
    }

    changePassword = (value) => {
      this.setState({password: value});
      // this.props.onChangePassword(value);
    }
  
    render() {
      return(
        <StyleProvider style={getTheme(theme)}>
          <Container>
            <Content style={styles.loginContent}>
                <View style={styles.loginHeaderContent}>
                    <Image style={styles.loginLogoImage} source={this.state.logoImage}></Image>
                    <Label style={styles.loginTitleLabel}>FasFit</Label>
                    <TouchableOpacity style={styles.loginCloseButton} onPress={this.handleClose}>
                        <Image style={styles.loginCloseImage} source={this.state.closeButtonImage}/>
                    </TouchableOpacity>
                </View>
                <Spinner
                  visible={this.state.spinner}
                  textContent={'Loading...'}
                />

              <KeyboardAwareScrollView 
                style={styles.loginKeyboardAvoiding}>
                <View>
                    <Label style={styles.loginHeaderTitleLabel}>Hello, Welcome back!</Label>
                    <Label style={styles.loginSubTitleLabel}>Email</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your email address' onChangeText={this.changeEmail} />
                    </Item>                 
                    <Label style={styles.loginSubTitleLabel1}>Password</Label>
                    <Item floatingLabel style={styles.underlineStyle}>
                      <Input placeholder='Please enter your password' secureTextEntry={true} onChangeText={this.changePassword} />
                    </Item>                 
                    <TouchableOpacity style={styles.pwdEyeButton} onPress={this.handleForgetPasswordEye}>
                        <Image style={styles.pwdEyeImage} source={this.state.forgetEyeImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginForgetPwdButton} onPress={this.handleForgetPassword}>
                        <Text style={styles.login_forget_button_title}>Forgot your password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
                      <Text style={styles.loginButtonTitle}>Log In</Text>
                    </TouchableOpacity>
                    <View style={styles.signupLabelContent}>
                      <Label style={styles.signupQuestion}>Don't have an account?</Label>
                      <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
                        <Text style={styles.signupButtonTitle}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                </View>                                                
              </KeyboardAwareScrollView>
            </Content>
          </Container>
        </StyleProvider>
      )
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);