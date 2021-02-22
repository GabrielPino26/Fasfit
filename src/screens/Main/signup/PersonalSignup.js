import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './PersonalSignupStyle';

import SplashScreen from 'react-native-splash-screen'

export default class PersonalSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      welcome_background: require('../../../../assets/image/welcome_background.png'),
      back_button: require('../../../../assets/image/back_button.png'),
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handlePersonal = () => {
    this.props.navigation.navigate('SignupDetail')
  }

  handleClient = () => {
    this.props.navigation.navigate('SignupDetail')
  }

  handleCustomer = () => {
    this.props.navigation.navigate('SignupDetail')
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.down_content}>
            <Image style={styles.backgroundImage} source={this.state.welcome_background} />
          </View>
          <View style={styles.up_content}>
            <TouchableOpacity style={styles.signupBackButton} onPress={this.handleBack}>
              <Image style={styles.signupBackButtonImage} source={this.state.back_button}/>
            </TouchableOpacity>
            <View style={styles.signupButtonContent}>
              <TouchableOpacity style={styles.personal_button} onPress={this.handlePersonal}>
                  <Text style={styles.personal_button_title}>Personal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.client_button} onPress={this.handleClient}>
                  <Text style={styles.client_button_title}>Client</Text>
              </TouchableOpacity>
              <Label style={styles.focusLabel}>Focus on hiring freelances</Label>
              <Label style={styles.orLabel}>OR</Label>
              <TouchableOpacity style={styles.customer_button} onPress={this.handleCustomer}>
                  <Text style={styles.customer_button_title}>Customer</Text>
              </TouchableOpacity>
              <Label style={styles.focusLabel}>Focus on buying, selling, posting</Label>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}