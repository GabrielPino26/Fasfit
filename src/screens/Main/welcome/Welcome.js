import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import { pushNotifications } from '../../../services';

import { styles } from './WelcomeStyle';

import SplashScreen from 'react-native-splash-screen'

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      welcome_background: require('../../../../assets/image/welcome_background.png'),
    }
  }

  componentDidMount() {
    SplashScreen.hide();
    pushNotifications.setupPushNotification(this._handleNotificationOpen)
  }
  
  _handleNotificationOpen = (notification) => {
    console.log('Check Notification : ', notification);
  }

  handleLogin = () => {
    this.props.navigation.navigate('Login')
  }

  handleSignup = () => {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.up_content}>
            <Label style={styles.welcomeTitleLabel}>Fasfit</Label>
            <Label style={styles.welcomeContentLabel}>"One is never over-dressed or under-dressed with a Little Black Dress."</Label>
            <Label style={styles.welcomeSubTitleLabel}>Karl Lagerfeld</Label>
          </View>
          <View style={styles.down_content}>
            <Image style={styles.backgroundImage} source={this.state.welcome_background} />
            <TouchableOpacity style={styles.login_button} onPress={this.handleLogin}>
                <Text style={styles.login_button_title}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup_button} onPress={this.handleSignup}>
                <Text style={styles.signup_button_title}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}