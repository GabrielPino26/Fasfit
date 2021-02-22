import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './BusinessSignupStyle';

import SplashScreen from 'react-native-splash-screen'

export default class BusinessSignup extends Component {

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

  handleBusiness = () => {
    this.props.navigation.navigate('SignupDetail')
  }

  handleStylistDesigner = () => {
    this.props.navigation.navigate('SignupDetail')
  }

  handleBrand = () => {
    this.props.navigation.navigate('SignupDetail')
  }

  handlePhotographerModel = () => {
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
              <TouchableOpacity style={styles.personal_button} onPress={this.handleBusiness}>
                  <Text style={styles.personal_button_title}>Business</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.client_button} onPress={this.handleStylistDesigner}>
                  <Text style={styles.client_button_title}>Stylist & Designer</Text>
              </TouchableOpacity>
              <Label style={styles.focusLabel}>Focus on selling and promoting</Label>
              <Label style={styles.orLabel}>OR</Label>
              <TouchableOpacity style={styles.customer_button} onPress={this.handleBrand}>
                  <Text style={styles.customer_button_title}>Brand</Text>
              </TouchableOpacity>
              <Label style={styles.focusLabel}>Focus on buying, selling, posting</Label>
              <Label style={styles.orLabel}>OR</Label>
              <TouchableOpacity style={styles.customer_button} onPress={this.handlePhotographerModel}>
                  <Text style={styles.customer_button_title}>Photographer/Model</Text>
              </TouchableOpacity>
              <Label style={styles.focusLabel}>Focus on promoting</Label>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}